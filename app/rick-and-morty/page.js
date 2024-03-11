import { Suspense } from 'react'
import Search from '../ui/search'
import AllCharacters from './AllCharacters'
import Heading from '../components/atoms/Heading'

const RickAndMorty = ({ searchParams }) => {
  const name = searchParams?.name || ''
  const currentPage = Number(searchParams?.page) || 1

  const headingData = {
    className: "pb-6 text-3xl font-bold",
    title: "Characters Rick & Morty",
    level: 1
  }

  return (
    <main className="section-style flex flex-col">
      <Heading headingData={headingData} />
      <Search placeholder="Search character" />
      <Suspense key={name + currentPage} fallback={<div>fallback</div>}>
        <AllCharacters query={name} currentPage={currentPage} />
      </Suspense>
    </main>
  )
}

export default RickAndMorty