const Button = ({ buttonData }) => {
  const {
    className,
    onClick,
    Children
  } = buttonData

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {Children}
    </button>
  )
}

export default Button