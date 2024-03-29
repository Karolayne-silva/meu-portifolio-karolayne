import "../styles.css";
import React, { useState, useEffect } from "react";
import imgLetra from "../img/letra K.svg";
import animacao from "../img/circulo.svg";
import imgLetraB from "../img/letraKb.svg";
import animacaoB from "../img/circulo branco.svg";
import "../styles/header.css";
import Toggle from "../components/Toggle";

export default function Header({ dark, setDark }) {
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={hasScrolled ? "header scrolled" : "header"}>
        <div className="header-in">
          <div className="imgs-header">
            <img
              src={!dark ? imgLetra : imgLetraB}
              alt="letra k"
              className="img-letra"
            />
            <img
              src={!dark ? animacao : animacaoB}
              alt="circulo ondulado"
              className="animation"
            />
          </div>

          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre mim</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
            <li>
              <Toggle
                handleChange={() => setDark(dark ? false : true)}
                isChecked={dark}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
