import Image from "next/image"

const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()
}

const getLocation = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  return res.json()
}

const CharacterDetails = async ({ params }) => {
  const character = await getCharacter(params.id)
  const location = await getLocation(params.id)

  return (
    <main className="flex flex-col">
      <Image
        src={character.image}
        alt={character.name}
        width={500}
        height={500}
        priority
      />
      <h2>{character.name}</h2>
      <p>status: {character.status}</p>
      <p>species: {character.species}</p>
      {
        character.type &&
        <p>type: {character.type}</p>
      }
      <p>gender: {character.gender}</p>
      <p>origin: {character.origin.name}</p>
      <p>location: {location.name}</p>
      <p>loction type: {location.type}</p>
      <p>dimension:{location.dimension}</p>
    </main>
  )
}

export default CharacterDetails