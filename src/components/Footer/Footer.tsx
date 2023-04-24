import React, {useState} from 'react'  
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'  
import {faFacebook} from '@fortawesome/free-brands-svg-icons'  
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'  
import {faMailBulk} from '@fortawesome/free-solid-svg-icons'    
import {faDirections} from '@fortawesome/free-solid-svg-icons'     

import DB_Text from '../../assets/texts/DB_Texts.json'
  
export interface FooterInterface{}
 

const Footer: React.FC<FooterInterface> = () => {   
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<footer className="footer">  
				<div className="row mx-auto footer-row">
					<div className="footer-col">
						<h4><Link to="/menu" className='disabledAnchor'>{ DB_Text.Footer.Menu }</Link></h4>   
					</div>
					<div className="footer-col">
						<h4><Link to="/sucursales" className='disabledAnchor'>{ DB_Text.Footer.Sucursales }</Link></h4>   
					</div>
					<div className="footer-col">
						<h4><Link onClick={handleShow} to="#" className='disabledAnchor'>{ DB_Text.Footer.Siguenos }</Link></h4>  
					</div>  
					<div className="footer-col">
						<h4><Link onClick={handleShow} to="#" className='disabledAnchor'>{ DB_Text.Footer.Contacto }</Link></h4>   
					</div>  
					<Link to="/">
						<img src={require('../../assets/img/MAKY_RESTO__SUSHI_transparente.png')} className=" logo-image-footer img-fluid" alt='SushiMakyLogo'/> 
					</Link>
				</div>
				<div className='footer-politicas' >
					<Link to="" className='footer-politicas-anchor'><p className='ml-3 mr-3'>{ DB_Text.Footer.Copyright }</p></Link> 
					<Link to="/privacidad" className='footer-politicas-anchor'><p className='ml-3 mr-3'>{ DB_Text.Footer.Politica }</p></Link>
					<Link to="/privacidad" className='footer-politicas-anchor'><p className='ml-3 mr-3'>{ DB_Text.Footer.Cookies }</p></Link> 
				</div>
			</footer> 

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
	)
}

export default Footer

 
