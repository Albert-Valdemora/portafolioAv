import React from "react";
import foto from "../img/modelo1.png";
import styled from "styled-components";
import CV from "../assets/Albert Daniel Valdemora Suarez.pdf";
import "../assets/bootstrap.css";
import "../assets/virtual.css";

const ImgStylizada = styled.img`
  width: 100%; /* Escala automáticamente al tamaño del contenedor */
  max-width: 100%; /* Evita que la imagen desborde su contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
  object-fit: cover; /* Asegura que la imagen se ajuste correctamente */
  background-color: transparent;
  position: relative;
`;

const CotainerEstilizado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto; /* Ajusta el contenedor automáticamente */
  padding: 2rem 0; /* Espaciado superior e inferior */
`;

const Index = () => {
  return (
    <CotainerEstilizado className="container py-5 animate__animated animate__zoomInDown">
      <div className="row align-items-center">
        {/* Columna de la imagen */}
        <div className="col-md-6 col-lg-4 py-3 text-center">
          <ImgStylizada src={foto} alt="Albert Valdemora" />
        </div>

        {/* Columna de texto */}
        <div className="col-md-6 col-lg-6 offset-lg-1 animate__animated animate__fadeInRight">
          <img
            src="https://readme-typing-svg.demolab.com?font=sans-serif&weight=800&size=45&duration=4000&pause=2000&color=FFFFFF&width=455&height=67&lines=Albert+Valdemora;Albert+Valdemora%F0%9F%91%8B"
            alt="Typing SVG"
            className="img-fluid"
          />
          <h5 className="fg-theme mb-3">
            Desarrollador
            <span style={{ color: "#007bff", fontWeight: "800" }}> Front-End</span>
          </h5>
          <p className="text-muted">
            Soy Albert Daniel Valdemora Suarez, tengo 20 años y soy estudiante
            de término en Desarrollo de Software en ITLA. He adquirido
            experiencia en la creación de páginas web, reparación,
            mantenimiento y ensamblaje de equipos informáticos. Me apasiona el
            desarrollo Web, con un enfoque en el diseño visual y la experiencia
            del usuario.
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
  );
};

export default Index;
