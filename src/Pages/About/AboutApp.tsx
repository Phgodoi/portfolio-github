import {
  Container,
  List,
  SubTitle,
  TitleContent,
  TitleHighLight,
} from "./AboutStyle";

const Content = () => {
  return (
    <Container>
      <TitleHighLight id="about">Olá, eu sou Paulo Godoi,</TitleHighLight>
      <SubTitle>Desenvolvedor Front-End</SubTitle>

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

      <SubTitle>Sobre Mim</SubTitle>
      <TitleContent>
        Me formei em Gestão da Tecnologia da Informação pela Universidade
        Cruzeiro do Sul, onde minha paixão por programação teve início. Desde
        então, minha dedicação só cresceu. Além de uma variedade de cursos na
        área, como o Bootcamp Santander Full Stack Developer em parceria com a{" "}
        <strong>Dio - Digital Innovation One</strong>, tenho aproveitado o
        valioso conteúdo da plataforma <strong>Curso em Vídeo</strong>, com o
        renomado professor Gustavo Guanabara. Toda essa aprendizagem me
        impulsionou a criar meu próprio portfólio, onde exibo minhas habilidades
        e projetos.
      </TitleContent>

      <TitleContent>
        Estou profundamente motivado a buscar novas oportunidades na área
        tecnológica e aplicar minha experiência em desafios empolgantes. Meus
        objetivos imediatos são encontrar uma posição desafiadora, onde eu possa
        expandir minhas habilidades e conhecimento. Estou à procura de posições
        como trainee ou desenvolvedor júnior, onde eu possa implementar tudo que
        aprendi até aqui e, ao mesmo tempo, continuar a aprender e crescer.
        Minha busca constante por aprimoramento me leva a explorar novas
        tecnologias, buscando sempre oferecer soluções e resultados de
        excelência.
      </TitleContent>

      <SubTitle>Habilidades</SubTitle>
      <List>
        <li>
          HTML <i className="fa-brands fa-html5" />
        </li>
        <li>
          CSS <i className="fa-brands fa-css3-alt" />
        </li>
        <li>
          JavaScript <i className="fa-brands fa-node-js" />{" "}
        </li>
        <li>TypeScript</li>
        <li>
          React <i className="fa-brands fa-react" />
        </li>
        <li>Lógica de programação </li>
        <li>
          Banco de dados <i className="fa-solid fa-database" />{" "}
        </li>
      </List>
    </Container>
  );
};

export { Content };
