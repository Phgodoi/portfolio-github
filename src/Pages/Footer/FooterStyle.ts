import styled from "styled-components";

export const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Content = styled.ul`
  p {
    padding: 10px;
    margin: 0;
    font-size: 16px;
    text-align: center;
  }
  span {
    padding: 15px;
    font-size: 1.3rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
