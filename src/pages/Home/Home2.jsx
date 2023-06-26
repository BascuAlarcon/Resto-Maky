 
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

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

function CarouselFadeExample() {
 
  const [lgShow, setLgShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagen, setImagen] = useState('_Maky_2-min.JPG');

  const openModalImg = (title, description, imagen) => { 
    setTitle(title);
    setDescription(description);
    setImagen(imagen);

    setLgShow(true);
  }

  const images = ['carousel01.png', 'carousel02.png', 'carousel03.png', 'carousel04.png']
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

  const selectNewImage = (index, images, next = true) => {
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
      <div className='container-home mt-2 mb-2'>
        <div className="carousel-container">
        <CarouselImg 

          src={require(`./../../assets/img/${selectedImage}`)} 
          alt="Sushi" 
          className={loaded ? "loaded" : ""} 
          onLoad={() => setLoaded(true)}/>  
          <div className="carousel-container-text">
            <p className='mt-5'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            <p className='mt-5'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            <p className='mt-5'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            <p className='mt-5'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>

        <h1 className='text-light'>Galería de fotos</h1>
        <div className='img-container'>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 2', '10 Tempura C – 5 Ciboulette – 5 Sésamo – 5 Nori', '_Maky_2-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_2-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 3', '10 Tempura A – 10 Nori – 5 Sésamo – 5 Nori', '_Maky_3-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_3-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 4', '10 Tempura A – 10 Tempura B – 10 Nori  – 5 Sésamo – 5 Ciboulette', '_Maky_4-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_4-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 5', '10 Tempura A – 10 Tempura B – 10 Queso Crema - 10 Nori – 5 Sésamo – 5 Ciboulette', '_Maky_5_v2-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_5_v2-min.JPG')} alt="" /></div>
        </div>
        <div className='img-container'>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 6', '10 Tempura C – 10 Tempura B – 10 Palta - 10 Nori – 5 Sésamo – 5 Ciboulette', '_Maky_6-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_6-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Maky 7', '10 Tempura A – 10 Tempura C – 20 Nori – 10 Sésamo – 10 Ciboulette', '_Maky_7-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Maky_7-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Tempura F', 'Champiñones - Pollo - Queso Crema', '_Tempura_Champinion_v2-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Tempura_Champinion_v2-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Tempura C', 'Pollo - Queso Crema - Cebollín', '_Tempura_C-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Tempura_C-min.JPG')} alt="" /></div>
        </div>
        <div className='img-container'>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 30 Fríos', '10 Nori – 10 Sésamo – 10 Ciboulette', '_Promo_30_Frios_v2-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_30_Frios_v2-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 30 Fríos', '10 Nori – 10 Sésamo – 10 Ciboulette', '_Promo_30_Frios-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_30_Frios-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 50', '20 Tempura A/B – 10 Ciboulette – 10 Sésamo – 10 Nori', '_Promo_50-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_50-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Tempuras 60', '30 Tempura A/B/C – 10 Ciboulette – 10 Sésamo – 10 Nori', '_Tempuras_60-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Tempuras_60-min.JPG')} alt="" /></div>
        </div>
      </div>  
      
      <Modal 
        show={lgShow}
        onHide={() => setLgShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h4 className='title-modal-home'>Menú Maky</h4>
            <h4 className='subtitle-modal-home'>{title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img className='img-modal-home' src={require('../../assets/img/home/_Maky_2-min.JPG')} alt="" />  */}
          <img className='img-modal-home' src={require(`../../assets/img/home/${imagen}`)} alt="" /> 
          <h5 className='description-modal-home mt-3'>{description}</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CarouselFadeExample;