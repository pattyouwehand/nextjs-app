import Link from "next/link"
import Card from "../components/molecules/Card"

const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  return res.json()
}

const AllCharacters = async ({ query, currentPage }) => {
  const characters = await getCharacters(query, currentPage)

  return (
    <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
      {
        characters.results.map((character) => {
          const cardData = {
            image: character.image,
            title: character.name
          }

          return (
            <div key={character.id} className="flex flex-col rounded-lg">
              <Link href={`/rick-and-morty/${character.id}`} className="w-auto h-[250px]">
                <Card cardData={cardData} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllCharacters