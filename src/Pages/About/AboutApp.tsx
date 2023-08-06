import { Container, Title, TitleContent, TitleHighLight } from "./AboutStyle";

const Content = () => {
  return (
    <Container>
      <TitleHighLight>Paulo Godoi</TitleHighLight>
      <Title>Desenvolvedor Front-End</Title>

      <TitleContent>
        Em busca de novas oportunidades na área de tecnologia como
        desenvolvedor, já realizei alguns projetos que estou compartilhando em
        meu portfólio. Entre eles, há projetos acadêmicos e outros desenvolvidos
        por profissionais que compartilharam seus trabalhos na internet. Sei que
        migrar de área nunca é fácil, mas estou me dedicando com{" "}
        <abbr title="conduta firme; perseverança, insistência, aferro">
          <em>afinco</em>
        </abbr>{" "}
        para conquistar meus objetivos. Tenho amplo conhecimento em HTML e CSS,
        e venho me aprimorando cada vez mais em outras tecnologias para estar
        sempre atualizado e preparado para novos desafios. Estou confiante em
        minha capacidade de contribuir para projetos de tecnologia inovadores e
        estou animado para encontrar uma equipe de trabalho que me permita
        crescer e evoluir como profissional.
      </TitleContent>
    </Container>
  );
};

export { Content };
