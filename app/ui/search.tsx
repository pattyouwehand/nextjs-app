'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import InputField from '../components/molecules/InputField'
import { ChangeEvent } from 'react'

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if(term) {
      params.set('name', term)
    } else {
      params.delete('name')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const inputFieldData = {
    containerStyle: "relative flex w-full md:w-1/2 lg:w-1/4 flex-shrink-0 my-4",
    labelForSrOnly: "search",
    placeholder,
    onChange: (e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value),
    defaultValue: searchParams.get('name')?.toString(),
    icon: undefined
  }

  return (
    <InputField inputFieldData={inputFieldData} />
  )
}

export default Search