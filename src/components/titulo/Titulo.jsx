import styled from "styled-components";

const ContenedorTitulo = styled.div`
  width: 100%;
  display: inline-block;
  margin: 20px 0 30px 0;
  position: relative;
  text-align: center;
`;

const TituloH2 = styled.h2`
  font-size: 31px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
  z-index: 1;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Linea = styled.div`
  position: absolute;
  bottom: 0;
  border-bottom: 3px solid ${(p) => p.color};
  
`;

const LineaColor = styled(Linea)`
  width: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Titulo = ({ title, color = "#F97316" }) => {
  return (
    <ContenedorTitulo>
      <LineaColor color={color} />
      <TituloH2>{title}</TituloH2>
    </ContenedorTitulo>
  );
};
