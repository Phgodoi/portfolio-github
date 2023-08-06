import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 30px;

  width: 100%;
  height: 60px;
  left: 0;
  overflow: hidden;
  background-color: #222;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);

  z-index: 22222;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 15px;

  list-style: none;
  align-items: center;
  text-align: center;
  justify-content: end;

  a{
    text-decoration: none;
    color: #fff;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  justify-self: start;
  cursor: pointer;

  .fa-react {
    font-size: 1.6rem;
    margin-left: 0.3rem;
  }
`;
