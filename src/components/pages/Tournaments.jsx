import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import liga from'/src/images/liga.PNG';
import eliminatoria from '/src/images/eliminatoria.jpg';
import linea from '/src/images/linea (1).png';

export default class Tournaments extends Component {
  render() {
    return (
      <div>
        <section id="service1" class="lol">
          <h2 class="subtitle_nosotros">LIGA</h2>
          <div class="fondito2">
            <div class="row cuidaito">
              <div class="col">
                <div class="fotitos">
                  <Image src={(liga)} alt="" />
                </div>
              </div>
              <div class="col">
                <div>
                  <p class="text-white">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident.</p>
                  <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>MÁS INFORMACIÓN</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        <div class="text-center comenzamos">
                        <Link as={Link} to="/jugar" className="btn btn-primary">JUGAR</Link>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="service2" class="lol">
          <h2 class="subtitle_nosotros">ELIMINATORIA</h2>
          <div class="fondito2">
            <div class="row cuidaito">
              <div class="col">
                <div>
                  <p class="text-white">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident.</p>
                  <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>MÁS INFORMACIÓN</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        <div class="text-center comenzamos">
                        <Link as={Link} to="/jugar" className="btn btn-primary">JUGAR</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                  
                </div>
              </div>
              <div class="col">
                <div class="fotitos">
                  <Image src={(eliminatoria)} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service3" class="lol">
          <h2 class="subtitle_nosotros">TORNEO LINEAL</h2>
          <div class="fondito2">
            <div class="row cuidaito">
              <div class="col">
                <div class="fotitos">
                  <Image src={(linea)} alt="" />
                </div>
              </div>
              <div class="col">
                <div>
                  <p class="text-white">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident.</p>
                    <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>MÁS INFORMACIÓN</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        <div class="text-center comenzamos">
                        <Link as={Link} to="/jugar" className="btn btn-primary">JUGAR</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    )
  }
}
