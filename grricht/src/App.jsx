import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Today from './components/Today'
import OurBelieve from './components/OurBelieve'
import Video from './components/Video'
import OurLurels from './components/OurLurels'
import Gallery from './components/Gallery'
import Find from './components/Find'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black font-cor text-colorPrimary w-full h-screen">
      <Navbar />
      <Header />
      <AboutUs />
      <Today />
      <OurBelieve />
      <Video />
      <OurLurels />
      <Gallery />
      <Find />
      <Footer />
    </div>
  )
}

export default App
