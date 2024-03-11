const Text = ({ textData }) => {
  const {
    className,
    text
  } = textData

  return (
    <p className={className && className}>{text}</p>
  )
}

export default Text