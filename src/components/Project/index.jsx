import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Titulo } from "../titulo/Titulo";

const index = () => {
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
                    alt=""
                  />
                </div>
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
              </div>

              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg bg-center"
                    src="./img/ToDoList.png"
                    alt=""
                  />
                </div>
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
              </div>

              <div className="rounded-[20px] w-[365px] h-[430px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg bg-center"
                    src="./img/TeachMathX.png"
                    alt=""
                  />
                </div>
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
              </div>



              <div className="rounded-[20px] w-[365px] h-[380px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src="https://wallpaperbat.com/img/860788-basic-fundamentals-of-reactjs-what-is-reactjs-.png"
                    alt=""
                  />
                </div>
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <span className="text-white font-bold cursor-pointer">Abrir</span>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>The Sevices provide for design</h5>
                </div>
              </div>

              <div className="rounded-[20px] w-[365px] h-[380px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src="https://media.sitepen.com/blog-images/2020/03/blog-ts-1024x538.png"
                    alt=""
                  />
                </div>
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <span className="text-white font-bold cursor-pointer">Abrir</span>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>The Sevices provide for design</h5>
                </div>
              </div>

              <div className="rounded-[20px] w-[365px] h-[380px] overflow-hidden bg-slate-800 p-3">
                <div className="cont-head">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src="https://wallpaperbat.com/img/860788-basic-fundamentals-of-reactjs-what-is-reactjs-.png"
                    alt=""
                  />
                </div>
                <div className="cont-footer py-1 flex justify-between"> 
                  <p className="inline-block py-1  rounded-3xl text-sm mr-2  ">
                    <span className="text-orange-400 font-bold">Albert Valdemora</span>
                  </p>
                  <p className="inline-block py-1 rounded-3xl text-sm ">
                    <span className="text-white font-bold cursor-pointer">Abrir</span>
                  </p>
                </div>
                <div className="cont-body">
                  <h5>The Sevices provide for design</h5>
                </div>
              </div>


            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default index;
