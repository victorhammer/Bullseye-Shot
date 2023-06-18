import React, { Component, useEffect } from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useState } from 'react'
import { db } from '../../config/firebase';
import { getDocs, getDoc, collection, doc, addDoc } from 'firebase/firestore';

import liga from '/src/images/liga.PNG';
import eliminatoria from '/src/images/eliminatoria.jpg';
import linea from '/src/images/linea (1).png';


function About() {

  const [fase1, setfase1] = useState(localStorage.getItem("fase1"));
  const [fase2, setfase2] = useState(localStorage.getItem("fase2"));
  const [fase3, setfase3] = useState(localStorage.getItem("fase3"));



  useEffect(() => {

      /*
    localStorage.setItem("fase1", '0');
    localStorage.setItem("fase2", '0');
    localStorage.setItem("fase3", '0');
    setfase1(localStorage.getItem("fase1"));
    setfase2(localStorage.getItem("fase2"));
    setfase3(localStorage.getItem("fase3"));
      */

    //PANTALLAS
    if (fase1 == '0' && fase2 == '0' && fase3 == '0') {
      localStorage.setItem("fase1", '1');
      localStorage.setItem("fase2", '0');
      localStorage.setItem("fase3", '0');
      /*
      setfase1(localStorage.getItem("fase1"));
      setfase2(localStorage.getItem("fase2"));
      setfase3(localStorage.getItem("fase3"));
      */
    };

    getTorneo();
    getListaJugadores();
  }, [fase1, fase2, fase3]);

  //PANTALLAS
  /*
  if (fase1 == '0' && fase2 == '0' && fase3 == '0') {
    localStorage.setItem("fase1", '1');
    localStorage.setItem("fase2", '0');
    localStorage.setItem("fase3", '0');
  };
  */
  

  const onClick1 = async () => {
    if (fase2 == '1') {

    } else if (fase2 == '0') {
      localStorage.setItem("fase1", '0');
      localStorage.setItem("fase2", '1');
      localStorage.setItem("fase3", '0');
      setfase1(localStorage.getItem("fase1"));
      setfase2(localStorage.getItem("fase2"));
      setfase3(localStorage.getItem("fase3"));

    }
  }
  const onClick2 = async () => {
    if (fase3 == '1') {

    } else if (fase3 == '0') {
      localStorage.setItem("fase1", '0');
      localStorage.setItem("fase2", '0');
      localStorage.setItem("fase3", '1');
      setfase1(localStorage.getItem("fase1"));
      setfase2(localStorage.getItem("fase2"));
      setfase3(localStorage.getItem("fase3"));

    }
  }
  const onClick3 = async () => {
    if (fase1 == '1') {

    } else if (fase1 == '0') {
      localStorage.setItem("fase1", '1');
      localStorage.setItem("fase2", '0');
      localStorage.setItem("fase3", '0');
      setfase1(localStorage.getItem("fase1"));
      setfase2(localStorage.getItem("fase2"));
      setfase3(localStorage.getItem("fase3"));
    }
  }

  //TORNEOS

  const [torneo, setTorneo] = useState("");
  const [listajugadores, setListaJugadores] = useState([]);

  const torneoRef = doc(db, "torneoliga", "k8OfuYJyVOur8o7Orjxp");
  const jugadoresRef = collection(db, "listajugadores");

  //datos nuevos a db
  const [newNombreTorneo, setNewNombreTorneo] = useState("");
  const [newNumeroJugadores, setNewNumeroJugadores] = useState(0);
  const [newNombreJugador, setNewNombreJugador] = useState("");

  const [inputJugador, setInputJugador] = useState("")

  //trae de db
  const getTorneo = async () => {
    try {
      const dataTorneo = await getDoc(torneoRef);

      /*if (dataTorneo.exists()) {
        console.log("Documento torneo:", dataTorneo.data());
      } else {
        
        console.log("No documento!");
      }*/

      setTorneo(dataTorneo.data());

    } catch (error) {
      console.error(error);
    }
  };
  console.log("Documents torneo:", torneo);
  const getListaJugadores = async () => {
    try {
      const dataJugadores = await getDocs(jugadoresRef);
      const filteredData = dataJugadores.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      console.log("Documents jugadores:", filteredData);
      setListaJugadores(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  

  //mete a db
  const onSubmitTorneo = async () => {
    try {
      await addDoc(torneoRef, {
        nombretorneo: newNombreTorneo,
        numjugadores: newNumeroJugadores,
        ganador: "",
        jugadores: [],
      });


      await addDoc(jugadoresRef, {
        nombretorneo: newNombreTorneo,
        nombrejugador: newNombreJugador,
        partidosganados: 0,
      });

      getTorneo();
      getListaJugadores();
    } catch (error) {
      console.error(error);
    }
  };

  let n = newNumeroJugadores;
  let m = 1;
  const saveInput = (e) => {
    setInputJugador(e.target.value);
  };

  const addNewJugador = () => {
    const copyCart = [...newNombreJugador];
    copyCart.push(inputJugador);
    setNewNombreJugador(copyCart);
    setInputJugador("");
    m = m + 1;
  };

  return (
    <div>
      {fase1 == '1' ?
        <section id="servicios2">

          <h2 className='titulo-centrito'>ELIGE UN TORNEO</h2>
          <div className="row">
            <div className="col ladito">
              <Link as={Link} to="#" onClick={onClick1}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={(liga)} />
                  <Card.Body>
                    <Card.Title>Liga</Card.Title>

                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col">

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={(eliminatoria)} />
                <Card.Body>
                  <Card.Title>Eliminatoria</Card.Title>

                </Card.Body>
              </Card>

            </div>
            <div className="col">

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={(linea)} />
                <Card.Body>
                  <Card.Title>Línea</Card.Title>

                </Card.Body>
              </Card>

            </div>
          </div>



        </section>

        : ''}
      {fase2 == '1' ?
        <div id='preguntas'>
          <div id="el_coso" className="filita">
            <div id="cosoizquierda">
              <form >
                <h2>Detalles del torneo</h2>

                <div id="nombreT" className="separate">
                  <input type="text" placeholder="Nombre del torneo..." onChange={(e) => setNewNombreTorneo(e.target.value)} />
                </div>
                <div id="numeroJ" className="separate">
                  Número de jugadores: &nbsp;
                  <select name="NumeroJugadores" id="NumeroJugadores" onChange={(e) => setNewNumeroJugadores(Number(e.target.value))}>
                    <option value="0" defaultValue >Selecionar...</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div>
                  <button className="enviar" onClick={onSubmitTorneo} > CREAR TORNEO </button>
                  <button className="enviar pasito" onClick={onClick3}> CANCELAR TORNEO </button>
                </div>
              </form>
            </div>
            <div id="cosoderecha" >
              <form >
                <h2>Jugadores</h2>

                {n != 0 ?
                  <div>
                    <h5>Nombre del Jugador {m}/{n}</h5>
                    <div id="jugadores-torneo" className="separate" >
                      <input type="text" placeholder="Nombre..." onChange={saveInput} />
                    </div>

                    <div>
                      <button className="enviar" onClick={addNewJugador} > Guardar Jugador </button>
                      <button className="enviar" onClick={onClick2} > ENVIAR </button>
                    </div>
                  </div>
                  : ""}
              </form>

            </div>
          </div>
        </div>
        : ''}
      {fase3 == '1' ?
        <div className='jueguito'>
          <h2>Liga</h2>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
          <button className="enviar" onClick={onClick3}> CERRAR TORNEO </button>
        </div>
        : ''}
    </div>
  )

}
export default About;
