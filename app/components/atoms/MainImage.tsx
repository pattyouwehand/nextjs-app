import Image, { StaticImageData } from "next/image"
import React from "react"

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

const MainImage: React.FC<ImageProps> = ({
    src,
    alt,
    className,
    width,
    height,
    fill,
    sizes,
    priority
  }) => {

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
    />
  )
}

export default MainImage