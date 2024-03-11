import { Suspense } from 'react'
import Search from '../ui/search'
import AllCharacters from './AllCharacters'

const RickAndMorty = ({ searchParams }) => {
    const name = searchParams?.name || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
      <main className="flex flex-col">
        <Search placeholder="Search character" />
        <Suspense key={name + currentPage} fallback={<div>fallback</div>}>
          <AllCharacters query={name} currentPage={currentPage} />
        </Suspense>
      </main>
    )
  }

  export default RickAndMorty