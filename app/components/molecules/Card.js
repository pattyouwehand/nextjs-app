import Link from 'next/link'
import Heading from '../atoms/Heading'

const Card = ({ cardData }) => {
  const {
    containerStyle,
    bgImage,
    headingContainerStyle,
    redirect,
    headingData
  } = cardData

  return (
    <div
      className={containerStyle}
      style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover"}}
    >
      {
        redirect ? (
          <div className={headingContainerStyle}>
            <Link href={redirect}>
              <Heading headingData={headingData} />
            </Link>
          </div>
        ) : (
          headingData &&
          <div className={headingContainerStyle}>
            <Heading headingData={headingData} />
          </div>
        )
      }
    </div>
  )
}

export default Card