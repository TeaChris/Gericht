import { GrClose } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavBtn = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="text-xl md:hidden text-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* displaying the nav icons conditionally */}
      {isOpen ? (
        <GrClose style={{ color: 'white !important' }} />
      ) : (
        <RxHamburgerMenu />
      )}
    </button>
  )
}

export default NavBtn
