const { MongoClient, ObjectId } = require('mongodb')

const uri = process.env.MONGODB_URI
const dbName = process.env.DB_NAME
const collectionName = process.env.COLLECTION_NAME

let cachedClient = null

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }

  if (!cachedClient) {
    console.log('Creating new MongoDB client...')
    cachedClient = new MongoClient(uri)
    await cachedClient.connect()
  }

  const client = cachedClient
  const database = client.db(dbName)
  const collection = database.collection(collectionName)

  const httpMethod = event.requestContext.http.method
  const body = event.body ? JSON.parse(event.body) : null

  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    }
  }

  try {
    let response;
    switch (httpMethod) {
      case 'GET':
        const todos = await collection.find({}).toArray()
        response = {
          statusCode: 200,
          headers,
          body: JSON.stringify(todos)
        }
        break;

      case 'POST':
        const newTodo = body
        const result = await collection.insertOne(newTodo)

        response = {
          statusCode: 201,
          headers,
          body: JSON.stringify({ ...newTodo, _id: result.insertedId })
        }
        break;

      case 'PUT':
        const { _id, ...updateData } = body
        const updateResult = await collection.updateOne({ _id: new ObjectId(_id) }, { $set: updateData })

        response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Todo updated successfully', updateResult })
        }
        break;

      case 'DELETE':
        const { _id: deleteId } = body; // Extract _id from the request body
        const deleteResult = await collection.deleteOne({ _id: new ObjectId(deleteId) })

        response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Todo deleted successfully', deleteResult })
        }
        break;

      default:
        response = {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: 'Unsupported HTTP method' })
        }
    }
    return response

  } catch (error) {
    console.error('Error:', error)

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    }
  }
}