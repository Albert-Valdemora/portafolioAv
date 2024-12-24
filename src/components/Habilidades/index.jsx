import React from "react";
import styled from "styled-components";
import { Titulo } from "../titulo/Titulo";
import ScrollAnimation from "react-animate-on-scroll";

const ContenedorEstilizado = styled.div`
  max-width: 90%;
  margin: 20px auto 0px auto;
  min-height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth; /* Para que el scroll sea suave */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const index = () => {
  return (
    <div>
      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
        <ContenedorEstilizado>
          <Titulo title="Servicios" />
          <h2>Qué puedo hacer?</h2>

          <div className="container">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 ">
              <div class="bg-[#1e293b] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 place-items-center text-center">
                <div class="text-4xl text-blue-500 mb-4">💻</div>
                <h4 class="text-xl font-bold text-blue-600 mb-2">
                  Desarrollo Front-End
                </h4>
                <p class="text-gray-400">
                  Desarrollo de interfaces dinámicas y eficientes con React,
                  utilizando Redux para la gestión de estados y librerías
                  modernas para mejorar la experiencia del usuario.
                </p>
              </div>

              <div class="bg-[#1e293b] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 place-items-center text-center">
                <div class="text-4xl text-blue-500 mb-4">🖥️</div>
                <h4 class="text-xl font-bold text-blue-600 mb-2">
                  Gestión de Datos
                </h4>
                <p class="text-gray-400">
                  Manejo de bases de datos en SAP Business One y análisis de
                  datos en Excel.
                </p>
              </div>

              <div class="bg-[#1e293b] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 place-items-center text-center">
                <div class="text-4xl text-blue-500 mb-4">🔧</div>
                <h4 class="text-xl font-bold text-blue-600 mb-2">
                  Desarrollo Back-End
                </h4>
                <p class="text-gray-400">
                  Habilidades en APIs con .NET y gestión de bases de datos.
                  Aunque mi enfoque principal es el Front-End, tengo bases
                  sólidas en Back-End.
                </p>
              </div>

              <div class="bg-[#1e293b] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 place-items-center text-center">
                <div class="text-4xl text-blue-500 mb-4">🛠️</div>
                <h4 class="text-xl font-bold text-blue-600 mb-2">
                  Reparación y Mantenimiento
                </h4>
                <p class="text-gray-400">
                  Experiencia en mantenimiento de equipos electrónicos y
                  ensamblaje de computadoras.
                </p>
              </div>
            </div>
          </div>
        </ContenedorEstilizado>
      </ScrollAnimation>
    </div>
  );
};

export default index;
