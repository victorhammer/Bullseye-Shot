import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useAuth } from '../context/AuthContext';
import logo from '../images/Captura5e.PNG';

function Header() {

    const [isSelect1, setIsSelect1] = useState(1);
    const [isSelect2, setIsSelect2] = useState(0);
    const [isSelect3, setIsSelect3] = useState(0);
    const [isSelect4, setIsSelect4] = useState(0);
    const [isSelect5, setIsSelect5] = useState(0);

    const onClickHeader1 = () => {
        if (isSelect1 == 1) {

        } else if (isSelect1 == 0) {
            setIsSelect1(1)
            setIsSelect2(0)
            setIsSelect3(0)
            setIsSelect4(0)
            setIsSelect5(0)
        }
    }
    const onClickHeader2 = () => {
        if (isSelect2 == 1) {

        } else if (isSelect2 == 0) {
            setIsSelect1(0)
            setIsSelect2(1)
            setIsSelect3(0)
            setIsSelect4(0)
            setIsSelect5(0)
        }
    }
    const onClickHeader3 = () => {
        if (isSelect3 == 1) {

        } else if (isSelect3 == 0) {
            setIsSelect1(0)
            setIsSelect2(0)
            setIsSelect3(1)
            setIsSelect4(0)
            setIsSelect5(0)
        }
    }
    const onClickHeader4 = () => {
        if (isSelect4 == 1) {

        } else if (isSelect4 == 0) {
            setIsSelect1(0)
            setIsSelect2(0)
            setIsSelect3(0)
            setIsSelect4(1)
            setIsSelect5(0)
        }
    }
    const onClickHeader5 = () => {
        if (isSelect5 == 1) {

        } else if (isSelect5 == 0) {
            setIsSelect1(0)
            setIsSelect2(0)
            setIsSelect3(0)
            setIsSelect4(0)
            setIsSelect5(1)
        }
    }

    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (

        <div className='fondo-header'>
            <Navbar bg="dark" variant='dark' expand="lg">
                <div id='nav-edit'>
                    <Navbar.Brand as={Link} to="/"><Image id='logo' src={(logo)} roundedCircle /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mt-2 mt-lg-3 margin-nav">
                            <Nav.Link as={Link} to="/" onClick={onClickHeader1} className={`under ${isSelect1 == 1 ? 'under-active' : ''}`}><h2>INICIO</h2></Nav.Link>
                            <Nav.Link as={Link} to="/tournaments" onClick={onClickHeader2} className={`under ${isSelect2 == 1 ? 'under-active' : ''}`}><h2>TORNEOS</h2></Nav.Link>
                            <Nav.Link as={Link} to="/jugar" onClick={onClickHeader3} className={`under ${isSelect3 == 1 ? 'under-active' : ''}`}><h2>JUGAR</h2></Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={onClickHeader4} className={`under ${isSelect4 == 1 ? 'under-active' : ''}`}><h2>CONTACTO</h2></Nav.Link>

                            {!user &&
                                <Nav.Link as={Link} to="/login" onClick={onClickHeader5} className={`under-login ${isSelect5 == 1 ? 'under-active' : ''}`}><h3>LOGIN</h3></Nav.Link>
                            }
                            {user &&
                                
                                <Nav.Link as={Link} to="#" className='under-login' onClick={handleLogout}><h3>LogOut</h3></Nav.Link>
                                
                            }

                        </Nav>

                    </Navbar.Collapse>
                </div>
                
            </Navbar>
            {user && 
            <h6 className='bienvenido text-center'>Bienvenido {user.email}
            </h6>}
            


        </div>

    )

}
export default Header