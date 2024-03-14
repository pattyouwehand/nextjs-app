'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import InputField from '../components/molecules/InputField'

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

  const inputFieldData = {
    containerStyle: "relative flex w-full md:w-1/2 lg:w-1/4 flex-shrink-0 my-4",
    labelForSrOnly: "search",
    placeholder: placeholder,
    onChange: (e) => {
      handleSearch(e.target.value)
    },
    defaultValue: searchParams.get('name')?.toString(),
    icon: true
  }

  return (
    <InputField inputFieldData={inputFieldData} />
  )
}

export default Search