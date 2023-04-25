const Cocktails = ({ cock }) => {
  // console.log(cock)
  return (
    <div>
      {cock.map((item) => {
        const { id, name, desc, price } = item
        return (
          <article key={id} className="w-72">
            <div className="flex flex-col pt-5">
              <div className="flex justify-between">
                <span className="capitalize">{name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-[0.05rem] bg-white"></div>
                  <span>${price}</span>
                </div>
              </div>
              <small className="text-white font-sans font-thin text-xs capitalize font-sans">
                {desc}
              </small>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Cocktails
