import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="container_contactos">
        <div id="el_coso" class="filita">
          <div id="cosoizquierda">
            <form action="#">
              <h2>Envianos un Mensaje</h2>
              <div id="nombre" class="separate">
                <input type="text" placeholder="Nombre" />
              </div>
              <div id="email" class="separate">
                <input type="text" placeholder="Email" />
              </div>
              <div id="asunto" class="separate">
                <input type="text" placeholder="Asunto" />
              </div>
              <div id="mensaje" class="mensajito">
                <input type="text" placeholder="Mensaje" />
              </div>
              <div>
                <button type="submit" className="enviar">ENVIAR</button>
              </div>
            </form>
          </div>
          <div id="cosoderecha">
            <h2>Contactanos</h2>

            <div id="phone" class="separate">
              <h4>TELÉFONO: <a href="https://web.whatsapp.com/">648702241</a></h4>
            </div>
            <div id="email_contacto" class="separate">
              <h4>EMAIL: <a href="https://www.google.com/intl/es/gmail/about/">alumno.53998@ies-azarquiel.es</a></h4>
            </div>
            <div id="direccion_contacto" >
              <h4>DIRECCIÓN: <a href="https://www.google.es/maps/@40.3083686,-3.6006195,9.75z?hl=es">C/ Esquina 23, Toledo</a></h4>
              <a href="https://www.google.es/maps/@40.3083686,-3.6006195,9.75z?hl=es"></a>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
