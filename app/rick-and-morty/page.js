import Search from "../ui/search"
import RickAndMortyList from "./RickAndMortyList"

const RickAndMorty = ({ searchParams }) => {
  const name = searchParams?.name || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <main className="flex flex-col">
      <Search placeholder="Search character" />
        <RickAndMortyList query={name} currentPage={currentPage} />
    </main>

  )
}

export default RickAndMorty