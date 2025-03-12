const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://rickandmortyapi.com/api"

const fetchData = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`)

    if(!res.ok) {
      console.error(`Failed to fetch data: ${res.status} ${res.statusText}`)
      return null
    }
    return await res.json()

  }catch (error) {
    console.error(error)
    return null
  }
}

export const fetchCharacters = async (query: string, page: number = 1) => {
  const data = await fetchData<{ results: any[]; info?: {pages: number} }>(`character?name=${query}&page=${page}`)

  if (!data) return { results: [], info: { pages: 1 } }
  return data
}

export const fetchCharacterById = async (id: number) => {
  const data = await fetchData<{id: number; name: string; [key: string]: any}>(`character/${id}`)

  if (!data) return null
  return data
}

export const fetchLocation = async (id: number) => {
  const data = await fetchData<{id: number; name: string; [key: string]: any}>(`location/${id}`)

  if (!data) return null
  return data
}