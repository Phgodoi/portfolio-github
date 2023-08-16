import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 20px;
  max-width: 90%;
  margin: 30px auto;
  line-height: 4rem;
  text-align: justify;

`;

export const TitleHighLight = styled.h1`
  font-size: 3rem;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
`;

export const TitleContent = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 300;
`;
export const List = styled.ul`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 5px;
  list-style: none;
  line-height: 1.2rem;
  text-align: left;


  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px;
  grid-gap: 15px 30px;
`;
