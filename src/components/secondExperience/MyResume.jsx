import React, { useState } from "react";
import styled from "styled-components";
import { Titulo } from "../titulo/Titulo";
import ScrollAnimation from "react-animate-on-scroll";

const ContenedorEstilizado = styled.div`
  max-width: 90%;
  margin: 20px auto 0px auto;
  height: auto;
  overflow: hidden;
  scroll-behavior: smooth; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; 
  font-size: 16px;

  @media (max-width: 560px){
    font-size: 12px;
    width: 60%;
  }
`;

const stylesNav = {
  width: " 800px",
  backgroundColor: "#1e293b",
  borderRadius: "10px",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  gap: "40px",
};

const SeccionContenedor = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const BotonActivo = styled.strong`
  color: #ffffff;
  background-color: #303c4f;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem ;
`;

export const MyResume = () => {
  const [seccion, setSeccion] = useState(
    localStorage.getItem("ResumenSeccion")
  );
  const [visible, setVisible] = useState(true);

  const handleSeccionChange = (newSeccion) => {
    if (seccion !== newSeccion) {
      setVisible(false); // Desvanece la sección actual
      setTimeout(() => {
        setSeccion(newSeccion); // Cambia la sección
        setVisible(true); // Vuelve a hacer visible la nueva sección
        localStorage.setItem("ResumenSeccion", newSeccion);
      }, 500); // Duración de la transición
    }
  };

  return (
    <>
      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
      <ContenedorEstilizado>
        <Titulo title='Mi Resumen' />

        <div style={stylesNav}>

          <div
            className="cursor-pointer hover:scale-[1.1] transition-transform"
            onClick={() => handleSeccionChange("Educacion")}
          >
            {seccion === 'Educacion' ? (<BotonActivo>Educacion</BotonActivo>) :(
              <strong className="text-xl p-2 hover:bg-[#303c4f] rounded-lg">
              Educacion
            </strong>
            )}      
          </div>

          <div
            className="cursor-pointer hover:scale-[1.1] transition-transform"
            onClick={() => handleSeccionChange("Trabajos")}
          >
            {seccion === 'Trabajos' ? (<BotonActivo>Trabajo</BotonActivo>) : (
              <strong className="text-xl p-2 hover:bg-[#303c4f] rounded-lg">
              Trabajos
            </strong>
            )}
            
          </div>

        </div>

        <SeccionContenedor visible={visible} className="container">
          <div className="container">
            <div className="row">
              {seccion !== "Educacion" ? (
                <>
                  <div className="col-md-6">
                    <ul className="theme-list mt-4 pr-md-5">
                      <li>
                        <div className="title">Mayo - julio 2024</div>
                        <div className="details">
                          <h5>Rolex</h5>
                          <small className="fg-theme titulo">
                            Gestor de Bases de Datos - SAP Business One
                          </small>
                          <small className="fg-theme titulo">
                            Analista de Datos - Excel
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg ">
                            Durante este periodo, trabajé como gestor de bases
                            de datos utilizando SAP Business One. Me encargué de
                            cambiar el estado de diversas facturas, asegurando
                            la precisión y actualización de la información en el
                            sistema. También trabajé con Excel, donde me
                            encargué de interpretar y actualizar datos de
                            clientes, mejorando la organización y accesibilidad
                            de la información.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="theme-list mt-4 pr-md-5">
                      <li>
                        <div className="title">Abril - Agosto 2022</div>
                        <div className="details">
                          <h5>Tecno-Multi La Unión</h5>
                          <small className="fg-theme titulo">
                            Pasante en Reparación y Mantenimiento de Equipos
                            Electrónicos
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Completé 360 horas de pasantía en una empresa
                            especializada en la reparación y mantenimiento de
                            equipos electrónicos, como televisores y monitores.
                            Esta experiencia me permitió desarrollar habilidades
                            prácticas y técnicas en el manejo de hardware
                            electrónico.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <ul className="theme-list mt-4 pr-md-5">
                      <li>
                        <div className="title">Enero 2023 - Actualidad</div>
                        <div className="details">
                          <h5>Instituto Tecnológico de las Américas (ITLA)</h5>
                          <small className="titulo">
                            Desarrollo de Software
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Formación especializada en desarrollo de software,
                            incluyendo programación, diseño de aplicaciones y
                            tecnologías emergentes. Enfoque en habilidades
                            prácticas y técnicas para el mercado laboral actual.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="title">Enero - julio 2024</div>
                        <div className="">
                          <h5>ONE Oracle Next Education</h5>
                          <small className="fg-theme titulo">Front-End</small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Desarrollo especializado en Front-End utilizando
                            React, enfocado en la creación de interfaces
                            modernas y atractivas.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="title">Enero - Abril 2023</div>
                        <div className="details">
                          <h5>Cisco Networking Academy</h5>
                          <small className="fg-theme titulo">
                            IT Essentials
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Habilidad en montaje y reparación de computadoras,
                            conocimiento en sistemas operativos, configuración
                            de dispositivos, mantenimiento de dispositivos.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="theme-list mt-4 pr-md-5">
                      <li>
                        <div className="title">Marzo - Noviembre 2022</div>
                        <div className="details">
                          <h5>INFOTEP</h5>
                          <small className="fg-theme titulo">
                            Manejador de programas de oficina e internet
                          </small>
                          <small className="fg-theme titulo">
                            Operaciones básicas de programas de oficina
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Manejo de paquetes de Office, incluyendo Word,
                            Excel, y PowerPoint. Uso de herramientas de Office
                            para tareas administrativas y de oficina.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="title">Agosto 2019 - Junio 2022</div>
                        <div className="details">
                          <h5>
                            Politécnico, Instituto Tecnologico Simon Orozco
                          </h5>
                          <small className="fg-theme titulo">
                            Técnico en Desarrollo de Aplicaciones Informáticas
                          </small>
                          <p className="w-ful bg-slate-800 p-2 rounded-lg">
                            Desarrollo de páginas web y aplicaciones de
                            escritorio. Reparación, mantenimiento y ensamblaje
                            de equipos informáticos.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </SeccionContenedor>
      </ContenedorEstilizado>
        </ScrollAnimation>
    </>
  );
};
