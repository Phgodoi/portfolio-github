import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3vh;
    width: 100%;
    background: linear-gradient(to top, #fffffff7, transparent);
    z-index: 1;
}

  .paisagem {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .balao {
    position: absolute;
    top: 10%;
    left: 0;
    width: 35%;
    pointer-events: none;
  }

  .star-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .star {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    border-right: 2px solid transparent;
    border-bottom: 3px solid #d7def4;
    border-left: 2px solid transparent;
    pointer-events: none;
    animation: starBlink 5s 7s infinite;
  }

  .star::before {
    content: "";
    position: absolute;
    top: 1px;
    left: -2px;
    width: 0;
    height: 0;
    border-right: 2px solid transparent;
    border-top: 3px solid #d7def4;
    border-left: 2px solid transparent;
  }

  .star::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -1px;
    top: 1px;
    border: 1px solid rgba(247, 247, 247, 0);
    border-radius: 50%;
    box-shadow: 0 0 15px 2px white;
  }

  @keyframes starBlink {
    0%, 50%, 100% {
      filter: brightness(2);
    }

    25%, 75% {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }

  @media (min-width: 900px), screen and (orientation: landscape) {
    .balao {
      width: 25%;
      top: 25%;
    }
  }
`;
