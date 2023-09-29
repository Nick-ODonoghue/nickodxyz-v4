"use client"

import Link from "next/link"
import { NavbarLinks } from "@/lib/interface"
import { getNavData } from "@/sanity/getSanityData"

export default async function NavLinks() {
  const navLinks = (await getNavData()) as NavbarLinks[]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (!navLinks) return <div>Loading...</div>
  return (
    <nav className=' '>
      <ul className=' flex gap-10'>
        {navLinks.map((link) => (
          <li className=' text-2xl font-medium' key={link._id}>
            <Link href={link.href} onClick={handleScroll}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
