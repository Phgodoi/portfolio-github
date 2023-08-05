import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--corC);
  padding: 15px;
  padding-right: 5vh;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  #toggler,
  label {
    display: none;
  }
`;
