import { Container, Content } from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Content id="Contact">
        <span>
          <a href="mailto:pauloh.godoi94@gmail.com"><i className="fa-solid fa-envelope"  /></a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/ph-godoi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </span>
        <span>
          <a href="https://github.com/Phgodoi" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />{" "}
          </a>
        </span>
        <p>Desenvolvido por Paulo Godoi</p>
      </Content>
    </Container>
  );
};

export { Footer };
