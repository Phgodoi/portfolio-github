import { NavData } from "./NavbarData";
import {Container,NavMenu, Logo} from "./NavbarStyle"

const Navbar = () => {
  return (
    <Container className="NavbarItems">
      <Logo>
        React <i className="fab fa-react" />
      </Logo>
      <NavMenu>
        {NavData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a href={item.url}>
                <i className={item.icon} /> {item.title}
              </a>
            </li>
          );
        })}
      </NavMenu>
    </Container>
  );
};

export default Navbar;
