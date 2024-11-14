import styled from "styled-components";
import HomeMe from "./components/HomeMe";
import Tecnologias from "./components/Tecnologias";
import Project from "./components/Project";
import { MyResume } from "./components/secondExperience/MyResume";
import { Footer } from "./components/footer/Footer";
import './app.css'

const Snap = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  scroll-behavior: smooth;
`;

const ButtonToTop = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  z-index: 1000;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const App = () => {
  return (
    <>
      <Snap>
        <header className="snap-section mt-4" id="homeAlbert">
          <h1 className="text-4xl font-extrabold text-white animate__animated animate__flipInX">
            Albert <span className="text-orange-500">Valdemora</span>
          </h1>
          <HomeMe />
        </header>

        <main>
          <div className="snap-section">
            <MyResume />
          </div>

          <div className="snap-section">
            <Tecnologias />
          </div>

          <div className="snap-section">
            <Project />
          </div>
        </main>

        <footer className="bg-slate-600 mt-20">
          <Footer />
        </footer>
      </Snap>


      <a href="#homeAlbert" className="text-white">
        <ButtonToTop className="btn-outline-primary btn">
          <i className="fa-solid fa-up-long"></i>
        </ButtonToTop>
      </a>
    </>
  );
};

export default App;
