import { useRef, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Button } from "../Buttom";


const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress] = useState(0);

  // Função para avançar para o próximo slide
  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  // Função para voltar ao slide anterior
  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  // ... array de objetos com informações dos slides
  const data = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="container">
      {/* Barra de carregamento (progresso) */}
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>

      {/* Container dos slides */}
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="buttons">

      <Button icon={faCaretLeft} variant="slide" id="prev" onClick={handleClickPrev}/>
     
      <Button icon={faCaretRight} variant="slide" id="prev" onClick={handleClickNext}/>
      </div>
    </div>
  );
};

export { Slider };
