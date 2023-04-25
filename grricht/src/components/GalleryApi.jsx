import { useState, useEffect } from 'react'

const GalleryApi = () => {
  const APP_ID = 'd55e857e'
  const API_KEY = '0dd4173898e9e64e97e953cd9bfbf73b'

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}&to=20`
        )
        const data = await response.json()
        setData(data.hits)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecipes()
  }, [])

  return <div>gallery</div>
}

export default GalleryApi
