import paisagem_img from "../assets/paisagem9.jpg";
import balao_img from "../assets/balao4.png";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img className="paisagem" src={paisagem_img} alt="paisagem" />
      <img className="balao" src={balao_img} alt="balao" />
    </Container>
  );
};

export { Header };
