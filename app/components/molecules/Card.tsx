import Link from 'next/link'
import Heading from '../atoms/Heading'

interface HeadingData {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

interface CardProps {
  cardData: {
    containerStyle: string;
    bgImage: string;
    headingContainerStyle?: string;
    redirect?: string;
    headingData?: HeadingData;
  }
}

const Card: React.FC<CardProps> = ({ cardData }) => {
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
            <Link href={redirect} passHref>
            {
              headingData?.title &&
              <Heading {...headingData} />
            }
            </Link>
          </div>
        ) : (
          headingData?.title &&
          <div className={headingContainerStyle}>
            <Heading {...headingData} />
          </div>
        )
      }
    </div>
  )
}

export default Card