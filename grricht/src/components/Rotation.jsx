import { useEffect } from 'react'
import Textfit from 'react-textfit'

const Rotation = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.documentElement.style.setProperty(
        '--rotate',
        `calc(var(--rotate, 0deg) + 1deg)`
      )
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-40 h-40 rounded-full bg-green-500 flex items-center justify-center overflow-hidden"
      style={{ transform: `rotate(var(--rotate, 0deg))` }}
    >
      <Textfit
        mode="single"
        forceSingleModeWidth={false}
        className="text-white text-center"
      >
        Delight in every bite
      </Textfit>
    </div>
  )
}

export default Rotation
