import { ReactNode } from "react"
import Logo from "@/assets/hufs_logo.png"
import Image from "next/image"

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Members", href: "/members" },
  { name: "Publications", href: "/publications" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
  { name: "Seminar", href: "/seminar" },
]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <div className="flex justify-between p-2 items-middle">
          <LabDetailsPanel />
          <Menu />
        </div>
      </header>
      <main>
        <div className="md:p-20">{children}</div>
      </main>
      <footer></footer>
    </>
  )
}

export default Layout

const LabDetailsPanel = () => {
  return (
    <div className="flex justify-between align-middle">
      <Image
        width={80}
        src={Logo}
        className="mr-4"
        alt="Hankuk University of Foreign Studies Logo"
      />
      <div>
        <div className="text-2xl font-title font-bold">IME-DBALab</div>
        <div>Industrial and Management Engineering</div>
        <div>Hankuk University of Foreign Studies</div>
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="flex justify-between items-center">
      {menu.map((item) => (
        <div className="mx-2" key={item.name}>
          <MenuItem name={item.name} href={item.href} />
        </div>
      ))}
    </div>
  )
}

interface IMenuItem {
  name: string
  href: string
}

const MenuItem = ({ name, href }: IMenuItem) => {
  return (
    <a href={href} className="text-gray-600 hover:text-gray-800">
      {name}
    </a>
  )
}
