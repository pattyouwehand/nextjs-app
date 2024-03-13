import Heading from '../atoms/Heading'
import MainImage from '../atoms/MainImage'
import NavLink from '../molecules/NavLink'
import { BiHomeSmile } from 'react-icons/bi'
import IconRick from '../../../public/icon-rick.png'

const DetailSection = ({ detailSectionData }) => {
  const {
    imageSrc,
    imageAlt,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    locationType,
    dimension
  } = detailSectionData

  const imageData = {
    className: "border-2 border-primary",
    src: imageSrc,
    alt: imageAlt,
    width: 250,
    height: 250,
    priority: true
  }

  const headingData = {
    className: "text-xl md:text-4xl lg:text-6xl font-bold",
    title: name,
    level: 1
  }

  const iconImageData = {
    className: "font-bold",
    src: IconRick,
    alt: "icon-rick",
    width: 50,
    height: 50
  }

  const navLinkBack = {
    url: "/rick-and-morty",
    icon: <MainImage imageData={iconImageData} />,
    text: "Go back"
  }

  const navLinkHome = {
    url: "/",
    icon: <BiHomeSmile className="text-primary" />,
    text: "Go home"
  }

  return (
    <div
      className="flex justify-center items-center w-full h-full"
      style={{
        backgroundImage: `url(https://images.hdqwalls.com/download/rick-and-morty-escape-5k-wd-2560x1440.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat"
      }}
    >
      <div className="flex justify-start items-center w-full bg-white bg-opacity-50">
        <div className="flex flex-col lg:flex-row w-full m-4 md:m-10 lg:m-20">
          <div className="flex gap-3 md:gap-6">
            <div className="flex justify-center items-center w-48 h-auto lg:w-auto lg:h-auto">
              <MainImage imageData={imageData} />
            </div>
            <div className="flex lg:hidden flex-col justify-center">
              <Heading headingData={headingData} />
              <p className="text-md lg:text-lg font-bold mt-1 mb-0">
                {`Current status ${status}`}
              </p>
            </div>
          </div>

          <div className="flex w-full my-2 gap-4">
            <div className="flex lg:basis-1/3 justify-start items-center lg:ml-10">
              <div className="flex flex-col md:flex-row lg:flex-col justify-start md:justify-between lg:justify-center w-full md:gap-6">
                <ul className="my-1 md:my-4">
                  <li className="font-bold text-lg">{name}</li>
                  <li>{`Species: ${species}`}</li>
                  <li>{`Gender: ${gender}`}</li>
                  <li>{`Origin: ${origin}`}</li>
                  {
                    type &&
                    <li>{`Type: ${type}`}</li>
                  }
                </ul>
                <ul>
                  <li className="font-bold text-lg">{`Location details`}</li>
                  <li>{`Last seen: ${location}`}</li>
                  <li>{`Location type: ${locationType}`}</li>
                  <li>{`Located at: ${dimension === "unknown" ? "Nobody knows" : dimension}`}</li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex flex-col basis-2/3 justify-center items-start leading-relaxed">
              <Heading headingData={headingData} />
              <p className="text-lg font-bold mt-2 mb-0">
                {`Current status ${status}`}
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col justify-center items-center gap-4">
            <NavLink navLinkData={navLinkBack} />
            <NavLink navLinkData={navLinkHome} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSection