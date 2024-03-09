import Link from "next/link"

const Home = () => {

  return (
    <main className="flex justify-center items-center min-h-screen p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 w-full lg:w-1/2 border rounded-lg shadow-md">
        <div>Me</div>
        <div>Todo</div>
        <div>
          <Link href="/rick-and-morty">R&M</Link>
        </div>
        <div>Img</div>
      </div>
    </main>
  )
}

export default Home
