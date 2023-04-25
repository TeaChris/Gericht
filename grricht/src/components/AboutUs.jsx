import Buttons from './Buttons'
import Marking from './Marking'
import Knife from '../assets/kinfe.png'

const AboutUs = () => {
  return (
    <section className="bg-background w-full h-[42rem] relative">
      <div className="container mx-auto grid place-items-center">
        <h1 className="md:text-[22rem] text-colorGray md:pt-12 md:opacity-70">
          G
        </h1>
      </div>
      <div className="container mx-auto w-[50rem] flex flex-col md:flex md:flex-row items-center gap-8 md:absolute md:top-0 md:right-[16rem]">
        {/* left */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-col items-end">
            <h3 className="text-4xl">About Us</h3>
            <div className="flex items-center">
              <div className="w-6 h-2 rounded-3xl bg-transparent border-2 border-colorPrimary"></div>
              <div className="md:h-1 w-6 bg-colorPrimary"></div>
            </div>
          </div>
          <div className="">
            <p className="text-white font-sans text-sm font-thin text-end">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nesciunt reprehenderit odio deserunt qui accusamus odit
              error inventore quibusdam tempore.
            </p>
          </div>
          <Buttons>Know More</Buttons>
        </div>
        {/* middle img */}
        <div className="">
          <img src={Knife} alt="img" className="h-[35rem] w-40 md:mt-16" />
        </div>
        {/* right */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-4xl">Our History</h3>
            <Marking />
          </div>
          <div className="">
            <p className="text-white font-sans text-sm font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nesciunt reprehenderit odio deserunt qui accusamus odit
              error inventore quibusdam tempore.
            </p>
          </div>
          <Buttons>Know More</Buttons>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
