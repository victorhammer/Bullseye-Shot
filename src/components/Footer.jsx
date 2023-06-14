import React from 'react'

import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

function Footer() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <footer>
            <div className="row">
                <div className="col">
                    <div id="ley">
                        <Button variant="primary" onClick={handleShow1} className='carlos'>
                            AVISO LEGAL
                        </Button>
                        
                        <Modal
                            show={show1}
                            onHide={handleClose1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>AVISO LEGAL</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in
                                tellus integer feugiat scelerisque varius. Nulla facilisi cras fermentum odio eu
                                feugiat pretium nibh. Augue mauris augue neque gravida in fermentum et
                                sollicitudin. Vel quam elementum pulvinar etiam. Nunc mi ipsum faucibus vitae
                                aliquet nec ullamcorper. Dis parturient montes nascetur ridiculus. Enim
                                facilisis gravida neque convallis. Aliquet nibh praesent tristique magna sit
                                amet purus. Massa placerat duis ultricies lacus. Vel fringilla est ullamcorper
                                eget nulla facilisi etiam. Ac placerat vestibulum lectus mauris ultrices eros in
                                cursus turpis. Laoreet non curabitur gravida arcu. Nam at lectus urna duis.

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1} >
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Button variant="primary" onClick={handleShow2} className='carlos'>
                            PRIVACIDAD
                        </Button>
                        
                        <Modal
                            show={show2}
                            onHide={handleClose2}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>PRIVACIDAD</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in
                                tellus integer feugiat scelerisque varius. Nulla facilisi cras fermentum odio eu
                                feugiat pretium nibh. Augue mauris augue neque gravida in fermentum et
                                sollicitudin. Vel quam elementum pulvinar etiam. Nunc mi ipsum faucibus vitae
                                aliquet nec ullamcorper. Dis parturient montes nascetur ridiculus. Enim
                                facilisis gravida neque convallis. Aliquet nibh praesent tristique magna sit
                                amet purus. Massa placerat duis ultricies lacus. Vel fringilla est ullamcorper
                                eget nulla facilisi etiam. Ac placerat vestibulum lectus mauris ultrices eros in
                                cursus turpis. Laoreet non curabitur gravida arcu. Nam at lectus urna duis.

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Button variant="primary" onClick={handleShow3} className='carlos'>
                            COOKIES
                        </Button>
                        
                        <Modal
                            show={show3}
                            onHide={handleClose3}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>COOKIES</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in
                                tellus integer feugiat scelerisque varius. Nulla facilisi cras fermentum odio eu
                                feugiat pretium nibh. Augue mauris augue neque gravida in fermentum et
                                sollicitudin. Vel quam elementum pulvinar etiam. Nunc mi ipsum faucibus vitae
                                aliquet nec ullamcorper. Dis parturient montes nascetur ridiculus. Enim
                                facilisis gravida neque convallis. Aliquet nibh praesent tristique magna sit
                                amet purus. Massa placerat duis ultricies lacus. Vel fringilla est ullamcorper
                                eget nulla facilisi etiam. Ac placerat vestibulum lectus mauris ultrices eros in
                                cursus turpis. Laoreet non curabitur gravida arcu. Nam at lectus urna duis.

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose3}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
                <div className="col">
                    <div id="logo_footer">
                    <Link to="/Home"><Image id='logo' src={require('../images/Captura5e.PNG')} roundedCircle /></Link>
                    </div>
                </div>
                <div className="col">
                    <div id="redes_footer">
                    <div className="row">
                            <div className="col">
                                <Link to="https://www.instagram.com/"><Image id='instagram' src={require('../images/instagram.png')} roundedCircle /></Link>
                            </div>
                            <div className="col">
                                <Link to="https://www.youtube.com/"><Image id='youtube' src={require('../images/youtube.png')} roundedCircle /></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to="https://twitter.com/?lang=es"><Image id='twitter' src={require('../images/twitter.png')} roundedCircle /></Link>
                            </div>
                            <div className="col">
                                <Link to="https://www.google.com/intl/es/gmail/about/"><Image id='gmail' src={require('../images/gmail.png')} roundedCircle /></Link>
                            </div>
                        </div>
                        <div className="row direction">
                            <div className="col">
                                <Link to="https://www.google.es/maps/preview">
                                    <p>Dirección: C/ Laguna Azúl, 23</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copydiv">
                <h4 id="copyright">&#169; 2023 - Bullseye Shot</h4>
            </div>
        </footer>
    )
}
export default Footer
