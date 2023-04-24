const Buttons = ({ onClick, children }) => {
  return (
    <button
      className={`w-32 h-12 bg-colorPrimary text-colorBlack duration-500 hover:border-2 hover:text-colorPrimary hover:border-colorPrimary hover:bg-transparent hover:transition hover:duration-500 ${onClick}`}
    >
      {children}
    </button>
  )
}

export default Buttons
