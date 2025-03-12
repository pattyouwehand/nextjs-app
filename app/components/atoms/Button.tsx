import { ReactNode } from 'react'

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button