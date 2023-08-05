import { NavContainer } from "./style";

const NavBar = () => {
  return (
    <NavContainer>
       <a href="index.html" className="logo"><i className="material-symbols-outlined">
            home
            </i></a>
        <input type="checkbox" id="toggler" />

        <label htmlFor="toggler"><i className="material-symbols-outlined">menu</i>      
        </label>

        <div className="menu">
            <ul className="list">
                <a href="index.html">Inicio</a>
                <a href="#about">Sobre Mim</a>
                <a href="#projects">Portfólio</a>
                <a href="#contact">Contato</a>
            </ul>
        </div>
    </NavContainer>
  );
};

export { NavBar };
