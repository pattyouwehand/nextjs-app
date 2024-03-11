import Heading from '../atoms/Heading'

const Card = ({ cardData }) => {
  const {
    image,
    title
  } = cardData

  const headingData = {
    title: title,
    level: 2
  }

  return (
    <div
      className="rounded-md h-full flex justify-start items-end shadow-md hover:shadow-xl"
      style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}
    >
      <div className="bg-white/30 rounded-bl-md backdrop-blur-sm p-2">
        <Heading headingData={headingData} />
      </div>
    </div>
  )
}

export default Card