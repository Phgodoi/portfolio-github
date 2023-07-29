import React, { useEffect, useRef } from "react";
import paisagem_img from "../assets/paisagem9.jpg";
import balao_img from "../assets/balao4.png";
import { Container } from "./style";

const Header = () => {
  const balloonRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const balloon = balloonRef.current;

    if (balloon) {
      window.addEventListener("scroll", () => {
        let value = window.scrollY;
        balloon.style.left = `${value / .7}px`;
        balloon.style.transform = `scale(${1 - value / 700})`;
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {
        // Limpa o evento ao desmontar o componente para evitar vazamentos de memória.
      });
    };
  }, []);

  return (
    <Container>
      <img className="paisagem" src={paisagem_img} alt="paisagem" />
      <img
        ref={balloonRef}
        className="balao"
        src={balao_img}
        alt="balao"
      />
    </Container>
  );
};

export { Header };
