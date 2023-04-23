import Img from '../assets/header-img.jpg'

const Header = () => {
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
              <div className="flex items-center">
                <div className="md:h-1 w-6 bg-colorPrimary"></div>
                <div className="w-6 h-2 rounded-3xl bg-transparent border-2 border-colorPrimary"></div>
              </div>
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
              <button className="w-32 h-12 bg-colorPrimary text-colorBlack duration-500 hover:border-2 hover:text-colorPrimary hover:border-colorPrimary hover:bg-transparent hover:transition hover:duration-500">
                Explore Menu
              </button>
            </div>
          </div>
        </div>

        {/* img */}
        <div className="w-[50%] flex items-end gap-8">
          <div className="relative">
            <div className="w-56 h-56 bg-colorPrimary absolute top-28 right-[-4%]"></div>

            <div className="bg-colorPrimary w-56 h-56 absolute bottom-[-3%] left-[-3%]"></div>
            <div className="">
              <img
                src={Img}
                alt="header img"
                className="w-[30rem] mt-32 z-10"
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
