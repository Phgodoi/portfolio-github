import styled from "styled-components";

export const Container = styled.main`
  padding: 60px 0;
  padding-bottom: 20px;
  width: 80vw;
  margin: 30px auto;
`;

export const TitleHighLight = styled.h1`
  font-size: 3rem;
  margin: 30px 5px;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 30px 5px;
`;

export const TitleContent = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 300;
`;
export const List = styled.ul`
  font-size: 1.1rem;
  font-weight: 300;

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  list-style: none;

  li {
    margin: 5px 10px;
  }
`;
