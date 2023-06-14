import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className='contenedor'>
      <section id="carousel-home">
        <Carousel indicators={false}>

          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={require('/src/images/11.PNG')}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={require('/src/images/22.PNG')}
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={require('/src/images/33.PNG')}
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={require('/src/images/44.PNG')}
              alt="4º slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="servicios">
        <h2>TORNEOS MÁS POPULARES</h2>
        <div className="row">
          <div className="col ladito">
            <Link as={Link} to="/tournaments">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('/src/images/liga.PNG')} />
                <Card.Body>
                  <Card.Title>Liga</Card.Title>

                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col">
            <Link as={Link} to="/tournaments">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('/src/images/eliminatoria.jpg')} />
                <Card.Body>
                  <Card.Title>Eliminatoria</Card.Title>

                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col">
            <Link as={Link} to="/tournaments">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('/src/images/linea (1).png')} />
                <Card.Body>
                  <Card.Title>Línea</Card.Title>

                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      <section id="elegirnos">
        <h2>¿Qué es Bullseye Shot?</h2>
        <div className='parrafito-centro'>
          <p>Bullseye Shot es un gestor online de torneos, donde puedes crear rápidamente un esquema o tabla de torneo para que nosotros llevemos la cuenta de puntos y tú puedas centrarte en divertirte. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.</p>
        </div>
        <h5 className='text-center'>Si tienes más preguntas, contactanos.</h5>
        <div className="text-center comenzamos">
          <Link as={Link} to="/contact" className="btn btn-primary">Contactar</Link>

        </div>
      </section>
    </div>
  )
}
export default Home