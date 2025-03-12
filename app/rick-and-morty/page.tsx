import Search from '../ui/search'
import AllCharacters from './AllCharacters'
import Heading from '../components/atoms/Heading'
import NavLink from '../components/molecules/NavLink'
import { BiHomeSmile } from 'react-icons/bi'

interface RickAndMortyProps {
  searchParams?: { name?: string; page?: string }
}

const RickAndMorty = ({ searchParams }: RickAndMortyProps) => {
  const name = searchParams?.name || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <main className="bg-primary py-5 md:py-10 lg:py-20 px-5 md:px-20 lg:px-36">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        <Heading
          className="pb-6 text-5xl md:text-6xl text-white font-bold"
          title="Characters Rick & Morty"
        />
        <div className="mt-2">
          <NavLink url="/" icon={<BiHomeSmile className="text-primary" />} text="Go home" />
        </div>
      </div>
      <Search placeholder="Search character" />
      <AllCharacters query={name} currentPage={currentPage} />
    </main>
  )
}

export async function generateMetadata() {
  return {
    title: "Rick & Morty Characters",
    description: "Search and explore characters from Rick & Morty.",
  }
}

export default RickAndMorty