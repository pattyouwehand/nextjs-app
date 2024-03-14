import Link from "next/link"
import Card from "../components/molecules/Card"
import { fetchCharacters } from "../lib/data"

const AllCharacters = async ({ query, currentPage }) => {
  const characters = await fetchCharacters(query, currentPage)

  return (
    <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-primary mt-6">
      {
        characters?.results?.map((character) => {
          const cardData = {
            containerStyle: "rounded-md h-full flex justify-start items-end shadow-md hover:shadow-xl",
            bgImage: character.image,
            headingContainerStyle: "bg-white/30 rounded-bl-md backdrop-blur-sm p-2",
            headingData: {
              title: character.name,
              level: 2
            }
          }

          return (
            <div key={character.id} className="flex flex-col rounded-lg">
              <Link href={`/rick-and-morty/${character.id}`} className="w-auto h-[250px] 3xl:h-[500px]">
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