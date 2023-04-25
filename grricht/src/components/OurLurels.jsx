// import Rotation from './Rotation'
import Marking from './Marking'
import { awards } from '../../data'

import Award from '../assets/award.png'

const OurLurels = () => {
  return (
    <section className="w-full h-[40rem] bg-background">
      <div className="w-[55rem] mx-auto flex flex-col md:flex md:flex-row items-center gap-20 pt-20">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col items-start gap-1">
            <h4 className="text-white text-2xl capitalize">
              awards & recognition
            </h4>
            <Marking />
          </div>
          <div className="">
            <h2 className="text-5xl capitalize">our lurels</h2>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 w-[26rem]">
            {awards.map((award) => {
              const { id, title, desc, img } = award
              return (
                <article key={id} className="flex items-center gap-4">
                  <img
                    src={img}
                    alt={title}
                    className="w-12 aspect-auto object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg capitalize">{title}</h3>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        {/* image right */}
        <div className="relative">
          <div className="">
            <img
              src={Award}
              alt=""
              className="md:w-[25rem] md:h-[30rem] object-cover"
            />
          </div>

          <div className="absolute top-12 left-[-15%]">
            <h1 className="text-colorLight opacity-60 capitalize text-[25rem]">
              g
            </h1>
          </div>
        </div>
      </div>
      {/* <Rotation /> */}
    </section>
  )
}

export default OurLurels
