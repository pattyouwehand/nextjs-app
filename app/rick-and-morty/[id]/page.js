import DetailSection from "@/app/components/organisms/DetailSection"

const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()
}

const getLocation = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  return res.json()
}

const CharacterDetails = async ({ params }) => {
  const character = await getCharacter(params.id)
  const location = await getLocation(params.id)

  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin
  } = character

  const detailSectionData = {
    imageSrc: image,
    imageAlt: name,
    name: name,
    status: status,
    species: species,
    gender: gender,
    type: type,
    origin: origin.name,
    location: location.name,
    locationType: location.type,
    dimension: location.dimension
  }

  return (
    <main className="h-screen">
      <DetailSection detailSectionData={detailSectionData} />
    </main>
  )
}

export default CharacterDetails