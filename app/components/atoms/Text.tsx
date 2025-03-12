import { ReactNode } from "react"

interface TextProps {
  className?: string;
  children: ReactNode;
}

const Text:React.FC<TextProps> = ({ className, children }) => {

  return (
    <p className={className}>{children}</p>
  )
}

export default Text