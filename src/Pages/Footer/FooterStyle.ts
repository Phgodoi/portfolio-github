import styled from "styled-components";

export const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 30px;
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
  i:hover {
    border-radius: 50%;
    color: #0f6466;
    transform: scale(1.3);
    cursor: pointer;
  }
`;
