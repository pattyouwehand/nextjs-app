const Heading = ({ headingData }) => {
  const {
    title,
    level,
    className
  } = headingData

  let headingContent

  switch (level) {
    case value: "1"
      headingContent = <h1 className={className && className}>{title}</h1>
      break;
    case value: "2"
      headingContent = <h2 className={className && className}>{title}</h2>
      break;
    case value: "3"
      headingContent = <h3 className={className && className}>{title}</h3>
      break;
    default:
      headingContent = <h1 className={className && className}>{title}</h1>
      break;
  }


  return (
    <>
      {headingContent}
    </>
  )
}

export default Heading

