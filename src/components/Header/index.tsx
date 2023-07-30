import { useEffect, useRef } from "react";
import paisagem_img from "../../assets/paisagem1.jpg";
import balao_img from "../../assets/balao4.png";
import { Container } from "./style";
import Star from "./Star";

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
        // Limpa o evento
      });
    };
  }, []);

  return (
    <Container>
      <img className="paisagem" src={paisagem_img} alt="paisagem" />
      <div className="star-container">
        {Array.from({ length: 20 }, (_, index) => (
          <Star key={index} />
        ))}
      </div>
      <img ref={balloonRef} className="balao" src={balao_img} alt="balao" />
    </Container>
  );
};

export { Header };
