import React from "react";
import foto from "../img/modelo1.png";
import styled from "styled-components";
import CV from "../assets/Albert Daniel Valdemora Suarez.pdf";
import '../assets/bootstrap.css';
import '../assets/virtual.css';

const ImgStylizada = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: contain;
  background-color: transparent;
  position: relative;
  bottom: 50px;
`;

const CotainerEstilizado = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
`;

const index = () => {
  return (
    <>
    
      <CotainerEstilizado className="container py-5 animate__animated animate__zoomInDown">
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className=" ">
              <ImgStylizada src={foto} alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 animate__animated animate__fadeInRight">
           
            <img
              src="https://readme-typing-svg.demolab.com?font=sans-serif&weight=800&size=45&duration=4000&pause=2000&color=FFFFFF&width=455&height=67&lines=Albert+Valdemora;Albert+Valdemora%F0%9F%91%8B"
              alt="Typing SVG"
            />
            <h5 className="fg-theme mb-3">
              Desarrollador
              <span style={{ color: "#007bff", fontWeight: "800" }}>
                {" "}
                Front-End
              </span>
            </h5>
            <p className="text-muted">
              Soy Albert Daniel Valdemora Suarez, tengo 20 años y soy estudiante
              de término en Desarrollo de Software en ITLA. He adquirido
              experiencia en la creación de páginas web, reparación,
              mantenimiento y ensamblaje de equipos informáticos. Me apasiona el
              desarrollo Web, con un enfoque en el diseño visual y la
              experiencia del usuario.
            </p>
            <ul className="theme-list">
              <li>
                <b>PAIS:</b> Republica Dominicana
              </li>
              <li>
                <b>CIUDAD:</b> Santo Domingo, RD
              </li>
              <li>
                <b>EDAD:</b> 20
              </li>
              <li>
                <b>GENERO:</b> Masculino
              </li>
            </ul>
            <a
              download="Albert Valdemora"
              href={CV}
              className="btn btn-outline-primary"
            >
              Descargar Currículum
            </a>
          </div>
        </div>
      </CotainerEstilizado>
    </>
  );
};

export default index;
