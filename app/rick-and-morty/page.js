import { Suspense } from 'react'
import Search from '../ui/search'
import AllCharacters from './AllCharacters'
import Heading from '../components/atoms/Heading'
import NavLink from '../components/molecules/NavLink'
import { BiHomeSmile } from 'react-icons/bi'

const RickAndMorty = ({ searchParams }) => {
  const name = searchParams?.name || ''
  const currentPage = Number(searchParams?.page) || 1

  const navLinkData = {
    url: "/",
    icon: <BiHomeSmile className="text-primary" />,
    text: "Go home"
  }

  const headingData = {
    className: "pb-6 text-5xl md:text-6xl text-white font-bold",
    title: "Characters Rick & Morty",
    level: 1
  }

  return (
    <main className="bg-primary py-5 md:py-10 lg:py-20 px-5 md:px-20 lg:px-36">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        <Heading headingData={headingData} />
        <div className="mt-2"><NavLink navLinkData={navLinkData} /></div>
      </div>
      <Search placeholder="Search character" />
      <Suspense key={name + currentPage} fallback={<div>fallback</div>}>
        <AllCharacters query={name} currentPage={currentPage} />
      </Suspense>
    </main>
  )
}

export default RickAndMorty