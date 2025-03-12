import Heading from '../atoms/Heading'
import Todos from '../../todo/Todos'

const TodoSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-full lg:w-1/2">
      <div className="flex flex-col">
        <Heading
          className="pb-6 text-5xl md:text-6xl text-primary font-bold"
          title="What to do today"
        />
      </div>
      <Todos />
    </div>
  )
}

export default TodoSection