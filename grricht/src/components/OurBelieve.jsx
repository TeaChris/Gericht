import Marking from './Marking'
import Chef from '../assets/chef.png'

const OurBelieve = () => {
  return (
    <section className="w-full bg-background h-[42rem]">
      <div className="w-[60rem] mx-auto flex flex-col md:flex md:flex-row md:pl-14 md:items-center items-center gap-8">
        {/* image */}
        <div className="">
          <img
            src={Chef}
            alt="chef"
            className="w-[25rem] h-[30rem] object-cover mt-20"
          />
        </div>
        {/* text */}
        <div className="flex flex-col items-start gap-4 pt-24 w-96">
          {/* chef */}
          <div className="flex flex-col items-start gap-1">
            <h6 className="text-sm text-white capitalize">chef's word</h6>
            <Marking />
          </div>
          {/* title */}
          <div className="flex flex-col gap-8 items-start">
            <h3 className="text-4xl capitalize">what we believe in</h3>
            <p>
              <span className="text-5xl text-white">"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempora libero alias optio, exercitationem quisquam
              excepturi. Officia, similique cum at sequi alias omnis excepturi
              aliquam quasi dolor, quae incidunt obcaecati.
            </p>
          </div>
          {/* ounder */}
          <div className="flex flex-col items-start gap-0">
            <h4 className="capitalize text-2xl">kelvin luo</h4>
            <p className="capitalize text-thin font-sans text-sm text-white">
              chef & founder
            </p>
          </div>
          <div className="">
            <p className="text-white font-dan text-[4rem]">Kelvin luo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBelieve
