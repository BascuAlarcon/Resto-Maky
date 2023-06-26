import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faTiktok } from '@fortawesome/free-brands-svg-icons' 
import { faMailBulk } from '@fortawesome/free-solid-svg-icons' 

import DB_Text from '../../assets/texts/DB_Texts.json'

export interface FooterInterface { }


const Footer: React.FC<FooterInterface> = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<footer className="footer">
				<div className="row mx-auto footer-row">

					<div className="container-footer-3 mt-3 mb-0">
						<h4 className='text-light title-footer-3'>Horario de atención:</h4>
						<h5 className='h5-Default'>De lunes a Miercoles: 12:45pm - 22:00pm</h5>
						<h5 className='h5-Default'>De Jueves a Sábado: 12:30pm - 22:30pm</h5>
						<h5 className='h5-Default'>Domingo: 12:15pm - 22:15pm</h5>
					</div>
					<div className='footer-col-2'>
						<span>
							<Link to="" className='footer-col-2'>
								<img src={require('../../assets/img/MAKY_RESTO__SUSHI_transparente.png')} className=" logo-image-footer img-fluid" alt='SushiMakyLogo' />
							</Link>
						</span> 
					</div>
					<div className='container-footer-2  mb-0 '>
						<a href='https://www.instagram.com/restomaky/' className='disabledAnchorDark mr-1'><FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }} size="2x" className='iconsModal' /></a>
						<a href='https://www.tiktok.com/@makyresto/' className='disabledAnchorDark mr-1'><FontAwesomeIcon icon={faTiktok} style={{ color: 'white' }} size="2x" className='iconsModal' /></a>
						<a href='https://www.facebook.com/sushimakytalca/' className='disabledAnchorDark'><FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }} size="2x" className='iconsModal' /></a>
					</div>
				</div>
				<div className="footer-row-2">
					<h4 className='text-light text-logo'>Pioneros en Talca, estamos ubicados en el centro de Talca con una variedad de rolls únicos.</h4>
				</div>
				<div className='footer-politicas' >
					<Link to="" className='footer-politicas-anchor'><p className='ml-3 mr-3 politicas-text'>{DB_Text.Footer.Copyright}</p></Link>
					<Link to="/privacidad" className='footer-politicas-anchor'><p className='ml-3 mr-3 politicas-text'>{DB_Text.Footer.Politica}</p></Link>
					<Link to="/privacidad" className='footer-politicas-anchor'><p className='ml-3 mr-3 politicas-text'>{DB_Text.Footer.Cookies}</p></Link>
				</div>
			</footer>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p className='modal-body-p-title'><FontAwesomeIcon icon={faMailBulk} style={{ color: 'blue' }} className='mr-1' />{DB_Text.ModalFooter.Correo}</p>
				</Modal.Header>
				<Modal.Header closeButton>
					<Modal.Title>{DB_Text.ModalFooter.Title_02}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='divModalBody'>
						<a href='https://www.instagram.com/restomaky/' className='disabledAnchorDark mr-1'><FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }} size="2x" className='iconsModal' /></a>
						<a href='https://www.instagram.com/restomaky/' className='disabledAnchorDark'>{DB_Text.ModalFooter.Redes_01}</a>
					</div>
					<div className='divModalBody'>
						<a href='https://www.facebook.com/sushimakytalca/' className='disabledAnchorDark'><FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }} size="2x" className='iconsModal' /></a>
						<a href='https://www.facebook.com/sushimakytalca/' className='disabledAnchorDark'>{DB_Text.ModalFooter.Redes_02}</a>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						{DB_Text.ModalFooter.Boton}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Footer


