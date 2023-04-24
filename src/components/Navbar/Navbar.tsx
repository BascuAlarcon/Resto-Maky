
import React, {useState} from 'react'  

import { Link } from 'react-router-dom';
import DB_Text from '../../assets/texts/DB_Texts.json'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDirections, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';

export interface NavbarInterface{} 

const Navbar: React.FC<NavbarInterface> = () => {
  
  const closeNavbarCollapse = () => {
    const navbarCollapseElement = document.getElementById("navbarSupportedContent")
    if(navbarCollapseElement){
      navbarCollapseElement.className = "navbar-collapse offset-lg-7 collapse"; 
    }
  }

  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
		closeNavbarCollapse();
	};

  return (
    <>
     <nav className='navbar navbar-expand-lg navbar-light navbar-modified'> 
      <Link className="navbar-brand" to="/" onClick={closeNavbarCollapse}>
        <div className="logo-image ml-4">
              <img src={require('../../assets/img/MAKY_RESTO__SUSHI_transparente.png')} className="img-fluid ml-1" alt='SushiMakyLogo'/>
        </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon  "></span>
      </button>
      <div className='collapse navbar-collapse offset-lg-7	' id="navbarSupportedContent"> 
        <ul className='navbar-nav '>  
          <li className='nav-item'>
            <a target="_blank" className='nav-link' onClick={closeNavbarCollapse} href={require('../../assets/texts/Carta_SushiMaky.pdf')} rel="noreferrer">{DB_Text.Navbar.menu}</a>         
          </li>
          <li className='nav-item'>
            <Link to="/sucursales" className='nav-link' onClick={closeNavbarCollapse}>{DB_Text.Navbar.mapa}</Link>        
          </li> 
          <li className='nav-item'>
            <Link onClick={handleShow} to="/#" className='nav-link'>{DB_Text.Navbar.contacto}</Link>        
          </li> 
        </ul>
      </div>
     </nav>

     <Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{ DB_Text.ModalFooter.Title_01 }</Modal.Title>
				</Modal.Header>
				<Modal.Body> 
					<p className='modal-body-p-title'>{ DB_Text.ModalFooter.Sucursal_01 }</p>
					<a href="https://wa.me/56976857550"><p className='modal-body-p-subtitle'><FontAwesomeIcon icon={faWhatsapp} style={{color: 'green'}} className='mr-1'/>{ DB_Text.ModalFooter.Numero_01 }</p></a>
					<p className='modal-body-p-subtitle mb-4'><FontAwesomeIcon icon={faDirections} style={{color: 'gray'}} className='mr-1'/>{ DB_Text.ModalFooter.Direccion_01 }</p>
					<p className='modal-body-p-title'>{ DB_Text.ModalFooter.Sucursal_02 }</p>
					<a href="https://wa.me/56967341133"><p className='modal-body-p-subtitle'><FontAwesomeIcon icon={faWhatsapp} style={{color: 'green'}} className='mr-1'/>{ DB_Text.ModalFooter.Numero_02 }</p></a>
					<p className='modal-body-p-subtitle mb-4'><FontAwesomeIcon icon={faDirections} style={{color: 'gray'}} className='mr-1'/>{ DB_Text.ModalFooter.Direccion_02 }</p>
					<p className='modal-body-p-title'>{ DB_Text.ModalFooter.Sucursal_03 }</p>
					<a href="https://wa.me/56964615308"><p className='modal-body-p-subtitle'><FontAwesomeIcon icon={faWhatsapp} style={{color: 'green'}} className='mr-1'/>{ DB_Text.ModalFooter.Numero_03 }</p></a>
					<p className='modal-body-p-subtitle mb-4'><FontAwesomeIcon icon={faDirections} style={{color: 'gray'}} className='mr-1'/>{ DB_Text.ModalFooter.Direccion_03 }</p> 
					<p className='modal-body-p-title'><FontAwesomeIcon icon={faMailBulk} style={{color: 'blue'}} className='mr-1'/>{ DB_Text.ModalFooter.Correo }</p> 
				</Modal.Body> 
				<Modal.Header closeButton>
					<Modal.Title>{ DB_Text.ModalFooter.Title_02 }</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='divModalBody'>
						<a href='https://www.instagram.com/restomaky/' className='disabledAnchorDark mr-1'><FontAwesomeIcon icon={faInstagram} style={{color: 'red'}} size="2x" className='iconsModal'/></a> 
						<a href='https://www.instagram.com/restomaky/' className='disabledAnchorDark'>{ DB_Text.ModalFooter.Redes_01 }</a>
					</div>
					<div className='divModalBody'>
						<a href='https://www.facebook.com/sushimakytalca/' className='disabledAnchorDark'><FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}} size="2x" className='iconsModal'/></a> 
						<a href='https://www.facebook.com/sushimakytalca/' className='disabledAnchorDark'>{ DB_Text.ModalFooter.Redes_02 }</a>
					</div>
				</Modal.Body> 
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
					{ DB_Text.ModalFooter.Boton }
					</Button> 
				</Modal.Footer>
			</Modal>
     </>
  );
} 

export default Navbar