import Marking from './Marking'
import Buttons from './Buttons'
import GalleryApi from './GalleryApi'

const Gallery = () => {
  return (
    <section className="w-full h-80 bg-background">
      <div className="container mx-auto flex flex-col pt-8 md:flex md:flex-row items-center gap-8">
        <div className="flex flex-col items-start gap-6 w-96">
          <div className="flex flex-col items-start gap-1">
            <h6 className="text-white md:text-2xl capitalize">instagram</h6>
            <Marking />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-5xl capitalize">photo gallery</h3>
            <div className="flex flex-col items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                distinctio cupiditate quos reprehenderit exercitationem
              </p>
              <Buttons>View More</Buttons>
            </div>
          </div>
        </div>
        <GalleryApi />
      </div>
    </section>
  )
}

export default Gallery
