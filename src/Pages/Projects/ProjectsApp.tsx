import { useRef} from "react";
import { faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Buttom/ButtomApp";
import { ProjectsData } from "./ProjectsData";
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
  return (
    <Wrapper id="Projects">
 
      {/* Container dos slides */}
      <Container ref={slideRef}>
      {ProjectsData.map((item, index) => {
        console.log(item); 
        return (
          <Item
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <Content className="item">
              <h1 className="name">{item.name}</h1>
              <p className="des">{item.desc}</p>
              <button>Ver no Github</button>
             
            </Content>
          </Item>
        );
      })}
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
