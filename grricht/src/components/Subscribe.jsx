import Marking from './Marking'
import Buttons from './Buttons'

const Subscribe = () => {
  return (
    <section className="w-[60%] mx-auto h-[18rem] flex flex-col items-center gap-4 bg-black border-[0.005rem] border-colorPrimary shadow-lg">
      <div className="flex flex-col items-center gap-6 pt-6">
        <div className="flex flex-col items-center gap-1">
          <h6 className="text-white capitalize text-lg">newsletter</h6>
          <Marking />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl md:text-4xl capitalize">
            subscribe to our newsletter
          </h3>
          <p className="text-white">And never mis latest updates</p>
        </div>
        <form action="" className="flex items-center gap-4">
          <input
            type="text"
            className="bg-transparent w-80 h-10 border-2 border-colorPrimary"
          />
          <Buttons>Subscribe</Buttons>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
