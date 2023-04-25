import Marking from './Marking'
import Subscribe from './subscribe'

import { FaFacebookF } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-full h-[35rem] bg-background">
      <Subscribe />
      <div className="mt-20 flex flex-col md:flex md:flex-row items-center md:gap-24 w-[60%] mx-auto">
        {/* first */}
        <div className="flex flex-col items-center gap-4">
          <h6 className="md:text-2xl capitalize">contact us</h6>
          <div className="flex flex-col items-center gap-0">
            <p className="text-white text-sm">
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <div className="flex flex-col items-center gap-0">
              <span className="text-white">+1 212-344-1230</span>
              <span className="text-white">+1 212-344-1230</span>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-5xl">Gerícht</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-white text-center">
              "The best way to find yourself is to lose yourself in the
              <br /> service of others.”
            </p>
            <Marking />
            <div className="flex items-center gap-1">
              <FaFacebookF className="text-sm text-white" />
              <CiTwitter className="text-sm text-white" />
              <BsInstagram className="text-sm text-white" />
            </div>
          </div>
        </div>
        {/* third */}
        <div className="flex flex-col items-center gap-2">
          <div className="">
            <h6 className="md:text-2xl capitalize">working hours</h6>
          </div>
          <div className="flex flex-col gap-0 items-center">
            <span className="text-sm text-white">Monday-Friday</span>
            <span className="text-white text-sm">08:00 am - 12:00 am</span>
          </div>
          <div className="flex flex-col gap-0 items-center">
            <span className="text-sm text-white">Saturday-Sunday</span>
            <span className="text-white text-sm">07:00 am - 11:00 pm</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
