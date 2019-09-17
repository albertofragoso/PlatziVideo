import { useState, useEffect } from 'react'

const useInitialState = API => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err))
  }, [])

  return videos
}

export default useInitialState