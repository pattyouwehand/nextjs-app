import Heading from "../atoms/Heading"

const Card = ({ cardData }) => {
  const {
    image,
    title,
    onClick
  } = cardData

  const headingData = {
    className: "shadow-md",
    title: title.title,
    level: 2
  }

  return (
    <div
      className="rounded-md"
      onClick={onClick && onClick}
      style={{backgroundImage: image, backgroundSize: "cover"}}
    >
      <div className="flex justify-start items-end p-4">
        <Heading headingData={headingData} />
      </div>
    </div>
  )
}

export default Card