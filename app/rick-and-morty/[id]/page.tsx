import DetailSection from "../../components/organisms/DetailSection"
import { fetchCharacterById, fetchLocation } from "../../lib/data"

interface CharacterDetailsProps {
  params : { id: string }
}

const CharacterDetails = async ({ params }: CharacterDetailsProps) => {
  const [character, location] = await Promise.all([
    fetchCharacterById(Number(params.id)),
    fetchLocation(Number(params.id))
  ])

  if (!character) return <p>Character not found</p>

  const detailSectionData = {
    imageSrc: character.image || "Unknown",
    imageAlt: character.name || "Unknown",
    name: character.name || "Unknown",
    status: character.status || "Unknown",
    species: character.species || "Unknown",
    gender: character.gender || "Unknown",
    type: character.type || "Unknown",
    origin: character.origin.name || "Unknown",
    location: location?.name || "Unknown",
    locationType: location?.type || "Unknown",
    dimension: location?.dimension === "unknown" ? "Nobody knows" : location?.dimension
  }

  return (
    <main className="min-h-screen">
      <DetailSection detailSectionData={detailSectionData} />
    </main>
  )
}

export default CharacterDetails