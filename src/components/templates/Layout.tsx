import { ReactNode } from "react"
import Logo from "@/assets/hufs_logo.png"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

const menu = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
  { name: "Seminar", href: "/seminar" },
]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>IME-DBALab</title>
      </Head>
      <header>
        <div className="flex flex-col lg:flex-row justify-between p-2 items-middle w-max lg:w-auto">
          <LabDetailsPanel />
          <Menu />
        </div>
      </header>
      <main>
        <div className="md:p-20 justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">{children}</div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default Layout

const LabDetailsPanel = () => {
  return (
    <div className="flex justify-center align-middle">
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
    <div className="flex items-center mt-5 lg:mt-0">
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
    <Link
      href={href}
      className="text-gray-600 hover:text-secondary hover:border-secondary"
      style={{ borderBottomWidth: "2px" }}
    >
      {name}
    </Link>
  )
}
