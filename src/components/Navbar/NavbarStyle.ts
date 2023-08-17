import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 0;

  width: 100%;
  height: 60px;
  left: 0;
  overflow: hidden;
  background-color: #222;
  box-shadow: 0 10px 10px  rgba(0, 0, 0, .3);

  @media screen and (max-width: 750px) {
    .NavMenu {
      position: absolute;
      top: 0;
      right: 0;
      margin: auto;
      padding: 0;
      align-items: stretch;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      background-color: #00000030;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(7px);
      border-radius: 13px;

      width: 100%;
      height: auto;
      padding-top: 70px;
      display: none;
      transition: all 0.3s ease-in-out;
    }
    .active {
      display: block;
    }

    ul a {
      display: block;
      widows: 100%;
      padding: 2rem 0;

      color: #000;
    }
    ul a:hover {
      background-color: #0f646660;
      backdrop-filter: blur(20px);
    }
    .mobile {
      display: block;
      padding:  0 30px;
    }
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 15px;

  margin: 10px; 
  list-style: none;
  align-items: center;
  text-align: center;
  justify-content: end;

  a {
    text-decoration: none;
    padding: 0.7rem 1rem;
    white-space: nowrap;
    color: #fff;
  }

  i {
    padding-right: 5px;
  }
  a:hover {
    background-color: #0f6466;
    border-radius: 10px;
    transition: linear(0.645, 0.045, 0.355, 1) 0.3s ease-in-out;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  z-index: 1;
  margin-left: 1rem;
  .fa-react {
    font-size: 1.6rem;
    margin-left: 0.3rem;
  }
`;

export const MobileMode = styled.div`
  color: #fff;
  display: none;
  z-index: 1;
  cursor: pointer;
`;
