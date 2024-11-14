import React, { useState } from "react";
import styled from "styled-components";
import { FaHome, FaCode } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";


const ContUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const NavEstilizado = styled.nav`
  width: 50px;
  padding: 20px;
  height: 250px;
  position: fixed;
  top: 40%;
  right: 30px;
  background-color: #a8a8a8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:hover {
    /* background-color: #e0e0e0;  */
    filter: drop-shadow(1px 1px 5px #e0e0e0);
  }

`;

const Icono = styled.li`
  font-size: 1.7rem; 
  cursor: pointer;
  color: ${({ activo }) => (activo ? "#007bff" : "#333")}; /* Color del ícono activo */
  background-color: ${({ activo }) => (activo ? "#d1ecf1" : "transparent")}; 
  border-radius: 50%;
  padding: 10px; 
  transition: background-color 0.3s, color 0.3s, filter 0.3s; 
  filter: ${({ activo }) => (activo ? "drop-shadow(1px 1px 20px #5eead4)" : "none")}; 
  
  &:hover {
    filter: drop-shadow(1px 1px 20px #5eead4); 
  }
`;

const Navbar = () => {
  const [activo, setActivo] = useState('home'); 

  const handleActivo = (key) => {
    setActivo(key);
  };

  const icons = [
    { component: <FaHome />, key: 'home' },
    { component: <RiUserSettingsFill />, key: 'settings' },
    { component: <FaCode />, key: 'code' }
  ];

  return (
    <div>
      <NavEstilizado>
        <ContUl>
          {
            icons.map(({ component, key }) => (
              <Icono 
                key={key} 
                activo={activo === key} 
                onClick={() => handleActivo(key)}
              >
                {component}
              </Icono>
            ))
          }
        </ContUl>
      </NavEstilizado>
    </div>
  );
};

export default Navbar;
