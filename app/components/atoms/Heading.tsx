import { JSX } from 'react'

interface HeadingProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, level = 1, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={className}>{title}</Tag>
}

export default Heading

