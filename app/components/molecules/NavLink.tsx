import Link from "next/link"
import Text from "../atoms/Text"
import React, { ReactNode } from "react"

interface NavLinkProps {
  url: string;
  icon?: ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ url, icon, text }) => {

  return (
    <Link href={url} aria-label="text">
      <div className="w-20 py-1 lg:py-0 lg:h-20 bg-[#fcf9f7] hover:bg-[#e0d9d3] rounded-lg">
        <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg">
          <div className="hidden lg:flex text-5xl">{icon}</div>
          <Text className="text-default text-sm mb-0">
            {text}
          </Text>
        </div>
      </div>
    </Link>
  )
}

export default NavLink