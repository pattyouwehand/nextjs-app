import Image from "next/image"
import Link from "next/link"

const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  return res.json()
}

const AllCharacters = async ({ query, currentPage }) => {
  const characters = await getCharacters(query, currentPage)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 lg:gap-4">
      {
        characters.results.map((character) => {
          return (
            <div key={character.id} className="flex flex-col rounded-lg p-4">
              <Link href={`/rick-and-morty/${character.id}`}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={250}
                  height={250}
                  priority
                />
                <h2>{character.name}</h2>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllCharacters