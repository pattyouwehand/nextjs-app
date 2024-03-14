export const fetchCharacters = async (query) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
  return res.json()
}

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()

}

export const fetchLocation = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  return res.json()
}


