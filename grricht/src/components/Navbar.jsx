import { useState } from 'react'
// import { RxHamburgerMenu } from 'react-icons/rx'
// import { GrClose } from 'react-icons/gr'
import { navlinks } from '../../data'
import NavBtn from './NavBtn'

// console.log(navlinks)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full h-14">
      <div className="flex container mx-auto items-center justify-between py-2">
        {/* logo */}
        <div className="w-full flex items-center justify-between  p-3 z-50">
          <h2 className="text-white text-2xl uppercase font-extrabold md:cursor-pointer">
            Gerícht
          </h2>
          {/* open and close nav icons */}
          <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* links container */}
        <ul className="md:flex hidden items-center gap-6">
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
        <div className="hidden md:flex gap-4 items-center">
          <div className="">
            <a className="text-white cursor-pointer">Login/Registration</a>
          </div>
          <div className="bg-white w-1 h-6"></div>
          <div className="">
            <a className="text-white cursor-pointer">Book</a>
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
