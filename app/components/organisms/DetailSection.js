import Heading from "../atoms/Heading"
import MainImage from "../atoms/MainImage"

const DetailSection = ({ detailSectionData }) => {
  const {
    image,
    title
  } = detailSectionData

  const headingData = {
    className: "",
    title: title.title,
    level: 1
  }

  return (
    <main className="section-style flex flex-col">
      <div className="flex">
        <MainImage imageData={imageData} />
        <div className="">
          <Heading headingData={headingData} />
        </div>
      </div>

    </main>
  )
}

export default DetailSection