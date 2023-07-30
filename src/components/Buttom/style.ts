import styled, { css }from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: backgound-color 0.5s all;


  background-color: #0077c2;
  color: #fff;

  &:hover {
    background-color: #005d8f;
  }

  ${({ variant }) => variant === "primary" && css `
  background-color: #000;
  color: #fff;
  `}
`;