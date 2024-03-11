'use client'

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams)

    if(term) {
      params.set('name', term)
    } else {
      params.delete('name')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex w-full md:w-1/3 xl:w-1/4 flex-shrink-0">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('name')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}

export default Search