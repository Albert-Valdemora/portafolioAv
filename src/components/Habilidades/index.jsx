import React, { useEffect } from "react";
import styled from "styled-components";
import { Titulo } from "../titulo/Titulo";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

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

  @media (max-width: 768px) {
    padding: 160px;
  }
`;


const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ServiceCard = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:hover::before {
    opacity: 0.7;
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    background: linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.6));
    filter: blur(16px);
    opacity: 0;
    z-index: -10;
    transition: all 0.5s ease;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1e293b;
    border-color: #334155;
  }
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  font-size: 2.5rem;
`

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`

const CardDescription = styled.p`
  color: #475569;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`


const index = () => {


// Componente de animación de entrada
const FadeInElement = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  )
}

  const services = [
    {
      icon: <i className="fa-solid fa-code"></i>,
      title: "Desarrollo Front-End",
      description:
        "Desarrollo de interfaces dinámicas y eficientes con React, utilizando Redux para la gestión de estados y librerías modernas para mejorar la experiencia del usuario.",
    },
    {
      icon: <i className="fa-solid fa-server"></i>,
      title: "Desarrollo Back-End",
      description:
        "Habilidades en APIs con .NET y gestión de bases de datos. Aunque mi enfoque principal es el Front-End, tengo bases sólidas en Back-End.",
    },
    {
      icon: <i className="fa-solid fa-database"></i>,
      title: "Gestión de Datos",
      description: "Manejo de bases de datos en SAP Business One y análisis de datos en Excel.",
    },
    {
      icon: <i className="fa-solid fa-wrench"></i>,
      title: "Reparación y Mantenimiento",
      description: "Experiencia en mantenimiento de equipos electrónicos y ensamblaje de computadoras.",
    },
  ]

  return (
    <div>
      <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
        <ContenedorEstilizado>
          <Titulo title="Servicios" />
          <h2>Qué puedo hacer?</h2>

          {/* <div className="container">
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
          </div> */}

          <ServicesGrid>
            {services.map((service, index) => (
              <FadeInElement key={index} delay={700 + index * 100}>
                <ServiceCard>
                  <IconContainer>{service.icon}</IconContainer>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </ServiceCard>
              </FadeInElement>
            ))}
          </ServicesGrid>
        </ContenedorEstilizado>
      </ScrollAnimation>
    </div>
  );
};

export default index;




