const WineAndBeer = ({ wine }) => {
  //   console.log(wine);
  return (
    <div>
      {wine.map((item) => {
        const { id, name, desc, price } = item
        return (
          <article key={id} className="w-72">
            <div className="flex items-start justify-between pt-5">
              <div className="flex flex-col gap-1 items-start">
                <span className="capitalize">{name}</span>
                <small className="text-white font-sans font-thin text-xs">
                  {desc}
                </small>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-[0.05rem] bg-white"></div>
                <span>${price}</span>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default WineAndBeer
