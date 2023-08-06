import { useRef} from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Buttom/ButtomApp";
import { Container, Content, Item, Wrapper, Row } from "./ProjectsStyle";

const SliderNew = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  

  // Função para avançar para o próximo slide
  const handleClickNext = () => {
    if (slideRef.current) {
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(items[0]);
    }
  };

  const handleClickPrev = () => {
    if (slideRef.current) {
      let items = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

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
    <Wrapper>
     
      {/* Container dos slides */}
      <Container ref={slideRef}>
        {data.map((item) => (
          <Item
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <Content>
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </Content>
          </Item>
        ))}
      </Container> 

            {/* Botões de navegação */}
      <Row>
        <Button icon={faCaretLeft} variant="slide" onClick={handleClickPrev} />

        <Button icon={faCaretRight} variant="slide" onClick={handleClickNext} />
      </Row>
    </Wrapper>
  );
};

export { SliderNew };
