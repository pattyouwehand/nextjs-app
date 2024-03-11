const Button = ({ buttonData }) => {
  const {
    className,
    onClick,
    text
  } = buttonData

  return (
    <button
      className={className && className}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  )
}

export default Button