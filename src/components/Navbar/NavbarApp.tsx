import { useState } from "react";
import { NavData } from "./NavbarData";
import { Container, NavMenu, Logo, MobileMode } from "./NavbarStyle";

const Navbar = () => {
  const [state, setState] = useState(false);
  const handleOnClick = () => {
   setState(!state)
  };

  return (
    <Container className="NavbarItems">
      <Logo>
        React <i className="fab fa-react" />
      </Logo>
      <MobileMode onClick={handleOnClick} className="mobile">
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </MobileMode>
      <NavMenu className={state ? "NavMenu active" : "NavMenu"}>
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
