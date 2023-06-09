 
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import MapboxMap from '../../components/Map/Mapbox';

const CarouselImg = styled.img` 
width: 30%;
height: auto; 
opacity: 0;
transition: 1s;
margin: 10px;
&.loaded {
  opacity: 1;
}
@media screen and (max-width: 980px){
	width: 100%;
  margin: 0;

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
      <div className='container-home mb-2'>
        <div className="inicioContainer">
          <img className='img-inicio' src={require('../../assets/img/home/portada.png')} /> 
          <img className='img-inicio-mobile' src={require('../../assets/img/home/portada_01.png')} /> 
          <img className='img-inicio-mobile' src={require('../../assets/img/home/portada_02.png')} /> 

        </div>
        <div className="carousel-container">
          {/* <CarouselImg  
          src={require(`./../../assets/img/${selectedImage}`)} 
          alt="Sushi" 
          className={loaded ? "loaded" : ""} 
          onLoad={() => setLoaded(true)}/>   */}
          <video controls className='videoContainer'>
            <source src={require(`./../../assets/img/home/vid.mp4`)} type='video/mp4'/>
          </video>

          <div className="carousel-container-text">
            <div className='container-textos-inicio'>
              <p className='texto-titulo-inicio'>Lo Mejor Zona Central</p>
              <p className='texto-sin-margen ml-5 mr-5 '>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            </div>
            <div className='container-textos-inicio'>
              <p className='texto-titulo-inicio '>Resto Maky</p>
              <p className='texto-sin-margen ml-5 mr-5 '>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            </div>
            <div className="containerMenuPedidoHome">
              <div className='container-textos-inicio'>
                <p className='texto-titulo-inicio'>Nuestro Menú</p>
                <p className='texto-sin-margen'>Descubre las distintas variedades y promociones</p>
                <button className='btn btn-dark text-white button-inicio'>Ver Carta</button>
              </div>
              <div className='container-textos-inicio'>
                <p className='texto-titulo-inicio'>Hacer pedidor</p>
                <p className='texto-sin-margen mt-0'>No esperes más y ponte en contacto con nosotros</p>
                <button className='btn btn-dark text-white button-inicio'>Contacto</button>            
              </div>
            </div>
            <div className='container-textos-inicio'>
              <p className='texto-titulo-inicio'>Horario de atención</p>
              <h5 className='texto-sin-margen h5-Default text-dark'>De lunes a Miercoles: 12:45pm - 22:00pm</h5>
              <h5 className='texto-sin-margen h5-Default text-dark'>De Jueves a Sábado: 12:30pm - 22:30pm</h5>
              <h5 className='texto-sin-margen h5-Default text-dark'>Domingo: 12:15pm - 22:15pm</h5>
            </div>
            </div>
        </div> 

        <div className="container-right"> 
          <div className="carousel-container-right">
            <CarouselImg  
              src={require(`./../../assets/img/${selectedImage}`)} 
              alt="Sushi" 
              id="carouselImg"
              className={loaded ? "loaded" : ""} 
              onLoad={() => setLoaded(true)}/>  

            <div className="carousel-container-text mt-4" id='galeria'> 
              <h1 className='titleReseñas'>Nuestras reseñas!</h1>
              <div className="container-comentario"> 
                <span className='container-star'>
                  <p className='texto-sin-margen texto-inicio-nombre'>Natalia Figeroa</p>
                  <p className='texto-sin-margen texto-inicio-fecha'>Hace 9 meses</p>
                  <div className="container-estrellas">
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                  </div>
                </span> 
                <p className='texto-sin-margen texto-inicio-comentario'>En cuanto al local del centro es maravilloso, siempre ricos, buena atención siempre y cuando me llegan a la casa envían muchos palitos y mucha soya, ya que un día se les pasó enviarme los insumos, pero como tenía más no hay problema, además cuando pido cambiar la envoltura de sésamo x ciboulette siempre me lo cambian, la demora es la normal, ni un problema hasta el momento, los repartidores muy amables siempre.</p>
              </div>
              <div className="container-after"></div>
              <div className="container-comentario"> 
                <span className='container-star'>
                  <p className='texto-sin-margen texto-inicio-nombre'>Claudia Rivera Mora</p>
                  <p className='texto-sin-margen texto-inicio-fecha'>Hace una semana atras</p>
                  <div className="container-estrellas">
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                  </div>
                </span> 
                <p className='texto-sin-margen texto-inicio-comentario'>Me gusta mucho ir, el sushi es rico, la atención al cliente es muy buena y el pedido sale rápido. Tienen tele y es lo mejor jaja (no tengo tv en la casa)</p>
              </div>
              <div className="container-after"></div>
              <div className="container-comentario"> 
                <span className='container-star'>
                  <p className='texto-sin-margen texto-inicio-nombre'>Carolina Rojas</p>
                  <p className='texto-sin-margen texto-inicio-fecha'>Hace un año</p>
                  <div className="container-estrellas">
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                    <img src={require(`./../../assets/img/star.png`)}  alt="" />
                  </div>
                </span> 
                <p className='texto-sin-margen texto-inicio-comentario'>Exquisito, productos frescos, precios muy asequibles, opciones veganas y vegetarianas. Así que 100% recomendable.</p>
              </div>
              
            </div>
          </div> 
        </div>
         

        <div className="container-title-inicio-galeria">
          <h1 className='title-inicio-galeria'>Galería de fotos</h1>
        </div>
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
        <div className='img-container'>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 30 Fríos', '10 Nori – 10 Sésamo – 10 Ciboulette', '_Promo_30_Frios_v2-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_30_Frios_v2-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 30 Fríos', '10 Nori – 10 Sésamo – 10 Ciboulette', '_Promo_30_Frios-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_30_Frios-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Promo 50', '20 Tempura A/B – 10 Ciboulette – 10 Sésamo – 10 Nori', '_Promo_50-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Promo_50-min.JPG')} alt="" /></div>
          <div className='container-img-individual'><img onClick={() => openModalImg('Tempuras 60', '30 Tempura A/B/C – 10 Ciboulette – 10 Sésamo – 10 Nori', '_Tempuras_60-min.JPG')} className='img-menu-home' src={require('../../assets/img/home/_Tempuras_60-min.JPG')} alt="" /></div>
        </div>
      </div>  

      <div className="container-title-inicio-galeria mt-3 mb-2"  >
          <h1 className='title-inicio-galeria'>Descubre nuestras sucursales!</h1>
        </div>
        <div className='containerMap'  id='mapa'>
          <MapboxMap/>
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