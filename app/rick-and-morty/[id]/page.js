import DetailSection from "@/app/components/organisms/DetailSection"
import { fetchCharacterById, fetchLocation } from "@/app/lib/data"

const CharacterDetails = async ({ params }) => {
  const character = await fetchCharacterById(params.id)
  const location = await fetchLocation(params.id)

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
    <main className="min-h-screen">
      <DetailSection detailSectionData={detailSectionData} />
    </main>
  )
}

export default CharacterDetails