const Header = () => {
  return (
    <header className="w-full mt-12 h-[50rem] bg-colorBlack">
      <div className="container mx-auto flex flex-col md:flex md:flex-row items-center gap-8">
        {/* # tags */}
        <div className="hidden md:flex items-center gap-5">
          <p>#Baf</p>
          <p>#Gericht</p>
        </div>
        {/* text */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <h5 className="capitalize text-sm text-yellow-50">
              Chase the new Flavour
            </h5>
            <div className="flex items-center gap-1">
              <div className="md:h-1 w-4 bg-colorPrimary"></div>
              <div className="w-5 h-2 rounded-3xl bg-transparent border-2 border-colorPrimary"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-xl text-colorPrimary capitalize tracking-tighter">
              The Key to fine dinning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              molestiae amet sapiente sequi tempora obcaecati ullam corrupti
              adipisci, est deserunt!
            </p>
            <button className=""></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
