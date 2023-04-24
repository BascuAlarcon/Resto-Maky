import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export interface HomeInterface{}

const CarouselImg = styled.img` 
width: 90%;
height: auto; 
opacity: 0;
transition: 1s;
margin: 10px;
&.loaded {
  opacity: 1;
}
`

const Home: React.FC<HomeInterface> = () => {

  const images = ['01-carousel-wallpaper.jpg', '02-carousel-wallpaper.jpg', '03-carousel-wallpaper.jpg']
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
 
  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 5000);
  
    return () => {
      clearInterval(interval);
    }
  });

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
      const nextIndex = next 
        ? condition ? selectedIndex + 1 : 0
        : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500) 
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }
  
  const next = () => {
    selectNewImage(selectedIndex, images)
  } 

  return (
    <>
      <div className='home-container'> 
        <CarouselImg 
          src={require(`./../../assets/img/${selectedImage}`)} 
          alt="Sushi" 
          className={loaded ? "loaded" : ""} 
          onLoad={() => setLoaded(true)}/> 
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>    
    </>
  )
}

export default Home