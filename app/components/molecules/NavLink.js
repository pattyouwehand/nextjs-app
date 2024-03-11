'use client'

import Link from "next/link"
import Text from "../atoms/Text"

const NavLink = ({ navLinkData }) => {
  const {
    url,
    icon,
    text
  } = navLinkData

  const textData = {
    className: "text-default text-sm mb-0",
    text: text
  }

  return (
    <Link href={url}>
      <div className="w-20 h-10 lg:h-20 bg-[#fcf9f7] hover:bg-[#e0d9d3] rounded-lg">
        <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg">
          <div className="hidden lg:flex text-5xl">{icon}</div>
          <Text textData={textData} />
        </div>
      </div>

    </Link>
  )
}

export default NavLink