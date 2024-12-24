import './footer.css';


export const Footer = () => {
  return (
    <div className=" h-9 flex justify-between items-center px-5 container-footer">
      <div className="text-white">
        <p className='m-0 name'>Albert Valdemora</p>
      </div>
      <div className="flex gap-4 redes">
        <a
          href="https://github.com/Albert-Valdemora"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white hover:scale-[1.1]"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/albert-valdemora/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white hover:text-blue-500 hover:scale-[1.1]"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:albertvaldemorat@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white  hover:text-orange-400 hover:scale-[1.1]"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>

      <div className="text-white">
        <p className='m-0'>Copyrights © 2024</p>
      </div>
    </div>
  );
};
