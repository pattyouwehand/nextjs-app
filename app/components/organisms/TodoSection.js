import Heading from '../../components/atoms/Heading'
import Todos from '../../todo/Todos'

const TodoSection = () => {
   const headingData = {
    className: "pb-6 text-5xl md:text-6xl text-primary font-bold",
    title: "What to do today",
    level: 1
  }

  return (
    <div className="flex flex-col justify-center items-center md:w-full lg:w-1/2">
      <div className="flex flex-col">
        <Heading headingData={headingData} />
      </div>
      <Todos />
    </div>
  )
}

export default TodoSection