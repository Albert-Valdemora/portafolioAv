import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Titulo } from "../titulo/Titulo"
import ScrollAnimation from "react-animate-on-scroll"

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "ScreenNest",
      description:
        "Es una aplicación web diseñada para los amantes del cine. Aquí podrás explorar una vasta colección de películas.",
      image: "./img/ScreenNest.png",
      githubUrl: "https://github.com/Albert-Valdemora/ScreenNest",
      liveUrl: "https://screen-nest-omega.vercel.app/",
      author: "Albert Valdemora",
    },
    {
      id: 2,
      title: "To Do List",
      description:
        "Es una aplicación web diseñada para organizar tus tareas diarias. Te permite crear, eliminar y marcar tareas como completadas de manera sencilla y eficiente.",
      image: "./img/ToDoList.png",
      githubUrl: "https://github.com/Albert-Valdemora/To-Do-List-AV",
      liveUrl: "https://to-do-list-av.vercel.app/",
      author: "Albert Valdemora",
    },
    {
      id: 3,
      title: "Teachmathx",
      description:
        "Es una aplicación web diseñada para ayudar a los estudiantes a estudiar matemáticas y ponerlos a prueba. Permite aprender sobre límites, derivadas, continuidad y funciones.",
      image: "./img/TeachMathX.png",
      githubUrl: "https://github.com/BeginnerDDev/teachmathx",
      liveUrl: "https://teachmathx.vercel.app/",
      author: "Albert Valdemora",
    },
    {
      id: 4,
      title: "Calendar App",
      description:
        "Aplicación web para gestionar eventos, permitir registro, inicio de sesión y creación, modificación o eliminación de eventos con fecha y hora. Ideal para organizar tu agenda de manera eficiente.",
      image: "./img/CalendarApp.png",
      githubUrl: "https://github.com/Albert-Valdemora/BackEnd-mernCalendar",
      liveUrl: "https://backend-merncalendar-production.up.railway.app/",
      author: "Albert Valdemora",
    },
  ]

  return (
    <>
      <div className="h-auto md:w-auto md:p-0  w-[100%] p-[150px] content-center pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
            <Titulo title="Proyectos" color="#F97316" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                      onClick={() => setSelectedImage(project.image)}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/80 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/80 rounded-full hover:bg-orange-500 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-300">
                        {project.author}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm">{project.description}</p>

                    <div className="mt-6 pt-4 border-t border-zinc-700/20">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-500">Ver detalles</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 text-orange-300 group-hover:text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


            
          </ScrollAnimation>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl mx-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-zinc-800 hover:bg-orange-600 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Proyecto ampliado"
              className="rounded-lg shadow-2xl max-h-[80vh] w-auto"
            />
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Index

