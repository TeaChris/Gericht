import Img from '../assets/header-img.jpg'
import Buttons from './Buttons'
import Marking from './Marking'

const Header = () => {
  const handleClick = () => {
    console.log('Button clicked!')
  }
  return (
    <header className="w-full mt-12 h-[50rem] bg-colorBlack">
      <div className="container mx-auto flex flex-col md:flex md:flex-row items-center gap-12">
        {/* left */}
        <div className="w-[50%] flex items-center gap-20">
          {/* # tags */}
          <div className="hidden md:flex md:flex-col items-center gap-12">
            <p className="transform rotate-[270deg] text-white">#Gericht</p>
            <p className="transform rotate-[270deg] text-white">#Baf</p>
          </div>
          {/* text */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-1">
              <h5 className="capitalize text-xl text-yellow-50">
                Chase the new Flavour
              </h5>
              <Marking />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-xl text-colorPrimary capitalize tracking-tighter text-[5.65rem] font-bold leading-snug">
                The Key to
                <br /> fine dinning
              </h2>
              <p className="text-lg">
                Delight your senses with our delectable and flavorful menu,
                crafted with only the freshest ingredients. Experience a taste
                of heaven with our heavenly desserts and gourmet treats.!
              </p>
              <Buttons onClick={handleClick()}>Explore Now</Buttons>
            </div>
          </div>
        </div>

        {/* img */}
        <div className="w-[50%] flex items-end gap-8">
          <div className="relative">
            <div className="w-56 h-56 bg-colorPrimary absolute top-28 right-[-4%]"></div>

            <div className="bg-colorPrimary w-56 h-56 absolute bottom-[-3%] left-[-3%]"></div>
            <div className="z-50">
              <img
                src={Img}
                alt="header img"
                className="w-[30rem] mt-32 z-50"
              />
            </div>
          </div>
          <div className="hidden md:flex md:flex-col items-center gap-1">
            <div className="w-1 h-8 bg-colorPrimary"></div>
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
