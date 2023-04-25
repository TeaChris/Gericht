import Marking from './Marking'
import Buttons from './Buttons'
import find from '../assets/find.png'

const Find = () => {
  return (
    <section className="w-full h-[40rem] bg-background">
      <div className="container pt-20 md:w-[50rem] mx-auto flex flex-col md:flex md:flex-row items-center gap-16">
        {/* left */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-1">
            <h6 className="text-white text-2xl capitalize">contact</h6>
            <Marking />
            <div className="">
              <h3 className="text-4xl capitalize">find us</h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <p className="text-white capitalize text-xs font-sans">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            <div className="flex flex-col items-start gap-2">
              <p className="text-2xl capitalize">opening hours</p>
              <span className="text-xs font-sans text-white capitalize">
                mon - fri: 10:00 am - 02-00 pm
              </span>
              <span className="text-xs font-sans text-white capitalize">
                sat - fri: 10:00 am - 03-00 pm
              </span>
            </div>
            <Buttons>Visit Us</Buttons>
          </div>
        </div>
        {/* right */}
        <div className="">
          <img src={find} alt="" className="w-[25rem] h-[30rem]" />
        </div>
      </div>
    </section>
  )
}

export default Find
