import { useState } from "react";
import curriculo from "../../Curriculo.pdf";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className="bg-miniwidget md:bg-transparent flex flex-row justify-between items-center px-8 py-8 md:py-10 fixed w-full z-50">
      
      <h1 className="text-3xl text-orange-300">dinozindev</h1>
      <div className="md:hidden">
        <button
          aria-pressed={menu}
          onClick={toggleMenu}
          className="group inline-flex w-12 h-12 text-miniwidget bg-orange-300 items-center justify-center rounded transition cursor-pointer"
        >
          <span className="sr-only">Menu</span>

          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
          >
            <rect
              className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-315"
              y="7"
              width="9"
              height="2"
              rx="1"
            />
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            />
            <rect
              className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:-rotate-225"
              y="7"
              width="9"
              height="2"
              rx="1"
            />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`fixed top-20 right-0 h-full w-6/12 bg-miniwidget flex flex-col items-end pr-8 gap-6 py-8
        transform transition-transform duration-300 ease-in-out md:hidden text-white
        ${menu ? "translate-x-0" : "translate-x-full"} md:w-4/12`}
      >
        <a className="hover:text-orange-200 transition-all" href="#details">
          <span className="text-orange-300">01.</span> Sobre
        </a>
        <a className="hover:text-orange-200 transition-all" href="#skills">
          <span className="text-orange-300">02.</span> Skills
        </a>
        <a className="hover:text-orange-200 transition-all" href="#projects">
          <span className="text-orange-300">03.</span> Projetos
        </a>
        <a className="hover:text-orange-200 transition-all" href="#contact">
          <span className="text-orange-300">04.</span> Contato
        </a>
        <a href={curriculo} target="_blank">
          <div className="border-solid rounded-md border p-3 text-orange-300 hover:text-white transition-all">
            Currículo
          </div>
        </a>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex flex-row justify-end items-center gap-6">
        <a className="hover:text-orange-200 transition-all heading-text underline-effect" href="#details">
          <span className="text-orange-300">01.</span> Sobre
        </a>
        <a className="hover:text-orange-200 transition-all heading-text underline-effect" href="#skills">
          <span className="text-orange-300">02.</span> Skills
        </a>
        <a className="hover:text-orange-200 transition-all heading-text underline-effect" href="#projects">
          <span className="text-orange-300">03.</span> Projetos
        </a>
        <a className="hover:text-orange-200 transition-all heading-text underline-effect" href="#contact">
          <span className="text-orange-300">04.</span> Contato
        </a>
        <a href={curriculo} target="_blank">
          <div className="border-solid rounded-md border p-3 text-orange-300 hover:text-white transition-all">
            Currículo
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;