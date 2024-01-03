import "../styles.css";
import menu from "../img/icone menu.svg";
import React, { useState, useEffect, useRef } from "react";
import imgLetra from "../img/letra K.svg";
import animacao from "../img/circulo.svg";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0; //aqui retorna true ou false
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <header className={hasScrolled ? "header scrolled" : "header"}>
        <div className="header-in">
          <div className="imgs-header">
            <img src={imgLetra} className="img-letra" />
            <img src={animacao} className="animation"/>
          </div>

          <nav className="header-nav" ref={navRef}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#contatos">Contatos</a>

            <div className="header-menu">
              <button onClick={showNavBar} className="nav-btn nav-close-btn">
                <img src={menu} alt="icone menu" />
              </button>
            </div>
          </nav>
          <div className="header-menu">
            <button onClick={showNavBar} className="nav-btn ">
              <img src={menu} alt="icone menu" />
            </button>
          </div>
        </div>
        
      </header>
    </>
  );
}
