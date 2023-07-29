import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .paisagem {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2vh;
    width: 100%;
    background: linear-gradient(to top, #fffffff7, transparent);
    z-index: 1;
  }

  .balao {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 35%;
  }
`;
