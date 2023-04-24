import { wineAndBeer, cocktails } from '../../data'
import Marking from './Marking'
import WineAndBeer from './WineAndBeer'

import Todayy from '../assets/today.png'
import Cocktails from './Cocktails'

const Today = () => {
  return (
    <section className="w-full h-[45rem] bg-colorBlack">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-8 mt-28">
          <div className="flex flex-col items-center gap-1">
            <h6 className="text-white capitalize">
              Menu that fits you palatte
            </h6>
            <Marking />
          </div>
          <h2 className="text-5xl capitalize">today's special</h2>
        </div>

        {/* bottom */}

        <div className="flex flex-col md:flex md:flex-row items-center gap-8 md:gap-4">
          {/* wine and beer */}
          <div className="flex flex-col items-center gap-1">
            <div className="">
              <h3 className="text-white text-3xl">Wine & Beer</h3>
            </div>
            <WineAndBeer wine={wineAndBeer} />
          </div>

          {/* image */}
          <div className="">
            <img src={Todayy} alt="img" className="h-96" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="">
              <h3 className="text-white text-3xl">Cocktails</h3>
            </div>
            <Cocktails cock={cocktails} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Today
