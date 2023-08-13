import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s all;

  background-color: #0077c2;
  color: #fff;

  &:hover {
    background-color: #005d8f;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #000;
      color: #fff;
    `}

  ${({ variant }) =>
    variant === "slide" &&
    css`
      color: #98a699a7;
      background-color: #2c35328e;
      margin: 0px 5px;
      border-radius: 50%;
      border: none;
      transition: 0.5s;
      border: none;

      &:hover {
        color: #0f6466;
        background-color: #d2e8e3;
        scale: 1.2;
        cursor: pointer;
      }
    `}
`;
