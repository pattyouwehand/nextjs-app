import Link from "next/link"
import Card from "../components/molecules/Card"
import { fetchCharacters } from "../lib/data"

interface AllCharactersProps {
  query: string;
  currentPage: number;
}

const AllCharacters = async ({ query, currentPage }: AllCharactersProps) => {
  const data = await fetchCharacters(query, currentPage)
  const characters = data?.results || []
  const totalPages = data?.info?.pages || 1

  if (!characters?.length) return <p className="text-white">No characters found.</p>

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-primary mt-6">
        {
          characters?.map((character) => {
            const cardData = {
              containerStyle: "rounded-md h-full flex justify-start items-end shadow-md hover:shadow-xl",
              bgImage: character.image ?? "",
              headingContainerStyle: "bg-white/30 rounded-bl-md backdrop-blur-sm p-2",
              headingData: {
                title: character.name,
                level: 2 as 2
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
      <div className="flex flex-col md:flex-row md:items-end justify-center">
        <div className="flex gap-4 mt-6">
          {
            currentPage > 1 && (
              <Link href={`?name=${query}&page=${currentPage - 1}`} className="bg-white text-primary px-4 py-2 rounded">
                Previous
              </Link>
            )
          }
          {
            currentPage < totalPages && (
              <Link href={`?name=${query}&page=${currentPage + 1}`} className="bg-white text-primary px-4 py-2 rounded">
                Next
              </Link>
            )
          }
        </div>
        <div className="text-white text-sm my-4 md:my-0 md:mx-4">Page {currentPage} of {totalPages}</div>
      </div>

    </div>
  )
}

export default AllCharacters