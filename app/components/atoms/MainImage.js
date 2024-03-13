import Image from "next/image"

const MainImage = ({ imageData }) => {
  const {
    src,
    alt,
    className,
    width,
    height,
    fill,
    sizes,
    priority
  } = imageData

  return (
    <Image
      src={src}
      alt={alt}
      className={className && className}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
    />
  )
}

export default MainImage