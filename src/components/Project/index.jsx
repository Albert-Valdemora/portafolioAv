import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Titulo } from "../titulo/Titulo";

const Index = () => {

  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageClick = (src) => {
    setSelectedImage(src); 
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };
  
  
  return (
    <>
      <div className="h-auto content-center pt-24 pb-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
            <Titulo title='Proyectos'/>

            <div className="flex flex-wrap justify-center gap-5 items-center">
            


              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src="./img/ScreenNest.png"
                    alt="ScreenNest"
                    onClick={() => handleImageClick("./img/ScreenNest.png")}
                  />
                </div>
                <a href="https://github.com/Albert-Valdemora/ScreenNest" target="_black" className="text-white hover:no-underline cursor-pointer">
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <a href="https://screen-nest-omega.vercel.app/" target="_black" className="text-white font-bold cursor-pointer">Abrir</a>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>ScreenNest</h5>
                  <p>Es una aplicación web diseñada para los amantes del cine. Aquí podrás explorar una vasta colección de películas. </p>
                </div>
                </a>
              </div>

              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg bg-center"
                    src="./img/ToDoList.png"
                    alt="ToDoList"
                    onClick={() => handleImageClick("./img/ToDoList.png")}
                  />
                </div>
                <a href="https://github.com/Albert-Valdemora/To-Do-List-AV" target="_black" className="text-white hover:no-underline cursor-pointer">
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <a href="https://to-do-list-av.vercel.app/" target="_black" className="text-white font-bold cursor-pointer">Abrir</a>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>To Do List</h5>
                  <p>Es una aplicación web diseñada para organizar tus tareas diarias. Te permite crear, eliminar y marcar tareas como completadas de manera sencilla y eficiente.</p>
                </div>
                </a>
              </div>

              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg bg-center"
                    src="./img/TeachMathX.png"
                    alt="TeachMathX"
                    onClick={() => handleImageClick("./img/TeachMathX.png")}
                  />
                </div>
                <a href="https://github.com/BeginnerDDev/teachmathx" target="_black" className="text-white hover:no-underline cursor-pointer">
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <a href="https://teachmathx.vercel.app/" target="_black" className="text-white font-bold cursor-pointer">Abrir</a>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>Teachmathx</h5>
                  <p>Es una aplicación web diseñada para ayudar a los estudiantes a estudiar matemáticas y ponerlos a prueba. Permite aprender sobre límites, derivadas, continuidad y funciones.</p>
                </div>
                </a>
              </div>



              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg bg-center"
                    src="./img/CalendarApp.png"
                    alt="CalendarApp"
                    onClick={() => handleImageClick("./img/CalendarApp.png")}
                  />
                </div>
                <a href="https://github.com/Albert-Valdemora/BackEnd-mernCalendar" target="_black" className="text-white hover:no-underline cursor-pointer">
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <a href="https://backend-merncalendar-production.up.railway.app/" target="_black" className="text-white font-bold cursor-pointer">Abrir</a>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>Calendar App</h5>
                  <p>Aplicación web para gestionar eventos, permitir registro, inicio de sesión y creación, modificación o eliminación de eventos con fecha y hora. Ideal para organizar tu agenda de manera eficiente.</p>
                </div>
                </a>
              </div>


           


              {selectedImage && (
                <div className=" fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                  <div className="relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-0 right-0 text-orange-500 font-extrabold text-xl bg-transparent border-none cursor-pointer p-3"
                    >
                      X
                    </button>
                    <img
                      className="max-w-full max-h-full rounded-lg"
                      src={selectedImage}
                      alt="Ampliada"
                      width={'900px'}
                    />
                  </div>
                </div>
              )}


            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Index;
