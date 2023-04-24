import { useState, useEffect } from 'react'
import { navlinks } from '../../data'
import NavBtn from './NavBtn'

// console.log(navlinks)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // change navbar on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 h-14 w-full z-50 bg-colorBlack grid place-items-center${
        scrolled ? 'backdrop-blur-lg' : ''
      }`}
    >
      <div className="flex container mx-auto items-center justify-between">
        {/* logo */}
        <div className="w-full flex items-center justify-between p-3 z-50">
          <h2 className="text-white text-2xl uppercase font-extrabold md:cursor-pointer">
            Gerícht
          </h2>
          {/* open and close nav icons */}
          <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* links container */}
        <ul className="md:flex hidden items-center gap-5">
          {/* rendering the links using map method */}
          {navlinks.map((links) => {
            const { name, link } = links
            return (
              <li key={name} className="py-7 px-3 inline-block capitalize">
                <a href={link} className="text-white">
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="hidden md:flex items-center gap-5">
          <div className="">
            <h2>Login/Registration</h2>
          </div>
          <div className="w-1 h-5 bg-colorPrimary"></div>
          <div className="">
            <h5>Book</h5>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className="">
        <ul
          className={`md:hidden bg-black absolute w-full h-full bottom-0 py-24 pl-8 duration-700 flex flex-col gap-4 ${
            isOpen ? 'left-0' : 'left-[-100%]'
          }`}
        >
          {/* rendering the links using map method */}
          {navlinks.map((links) => {
            const { name, link } = links
            return (
              <li key={name} className="">
                <a href={link} className="text-white">
                  {name}
                </a>
              </li>
            )
          })}
          <div className="mt-12 flex flex-col gap-4">
            <div className="">
              <h5 className="">LogIn / Registration</h5>
            </div>
            <div className="">
              <h5>Book Table</h5>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
