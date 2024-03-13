import NavLink from "../components/molecules/NavLink"
import TodoSection from "../components/organisms/TodoSection"
import { BiHomeSmile } from 'react-icons/bi'

const Todo = () =>  {
  const navLinkData = {
    url: "/",
    icon: <BiHomeSmile className="text-primary" />,
    text: "Go home"
  }

  return (
    <main className="flex flex-col justify-center items-center mx-5 py-5 md:py-10 lg:py-20 md:px-20 lg:px-36">
      <TodoSection />
      <div className="mt-20">
        <NavLink navLinkData={navLinkData} />
      </div>
    </main>
  )
}

export default Todo