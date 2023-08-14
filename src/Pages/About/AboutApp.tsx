import { Container, List, SubTitle, TitleContent, TitleHighLight } from "./AboutStyle";

const Content = () => {
  return (
    <Container>
      <TitleHighLight id="about">Paulo Godoi</TitleHighLight>
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
      <TitleContent >
      Formado em Gestão da Tecnologia da Informação pela Universidade Cruzeiro do Sul, foi durante o curso que tive meu primeiro contato com linguagens de programação. Desde então, me apaixonei pela área e venho estudando cada vez mais sobre o assunto. Além de possuir diversos cursos na área, como o <strong>Bootcamp Santander Full Stack Developer</strong> em parceria com a<strong> Dio - Digital Innovation One</strong>, também tenho aproveitado muito o conteúdo disponibilizado na plataforma do <strong>Curso em Vídeo</strong> com o <strong>professor Gustavo Guanabara</strong>.
            Com todo esse conhecimento adquirido, comecei a desenvolver meu primeiro portfólio para demonstrar minhas habilidades e projetos desenvolvidos. Estou muito motivado em buscar novas oportunidades na área de tecnologia e aplicar meus conhecimentos em projetos desafiadores.

            Tenho como objetivos imediatos encontrar uma oportunidade desafiadora na área de tecnologia, onde eu possa desenvolver minhas habilidades e aprimorar meu conhecimento. Busco por oportunidades como trainee ou desenvolvedor júnior, onde eu possa colocar em prática tudo o que aprendi até aqui e, ao mesmo tempo, continuar a aprender e crescer profissionalmente. Estou sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias para oferecer as melhores soluções e resultados.
      </TitleContent>

      <SubTitle>Habilidades</SubTitle>
            <List>
                <li>HTML <i className="fa-brands fa-html5" /></li>
                <li>CSS <i className="fa-brands fa-css3-alt" /></li>
                <li>JavaScript  <i className="fa-brands fa-node-js" /> </li>
                <li>TypeScript</li>
                <li>React  <i className="fa-brands fa-react" /></li>
                <li>Lógica de programação </li>
                <li>Banco de dados <i className="fa-solid fa-database" /> </li>
            </List>
    </Container>
  );
}; 

export { Content };
