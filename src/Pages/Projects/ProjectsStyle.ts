import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%);

  height: 100vh;
  max-height: 650px;

  padding: 0;
  margin-bottom: 50px;
  background-color: #fff;

  box-shadow: 0 10px 10px  rgba(0, 0, 0, .3);

`;

export const Container = styled.div`
  width: max-content;
  margin-top: 50px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-itens: center;

  position: absolute;
  bottom: 20px;
  left: calc(50% - 50px);
`;

export const Item = styled.div`
  width: 8vw;
  height: 6vh;
  background-position: 50% 50%;
  display: inline-block;
  background-size: cover;
  position: absolute;
  top: 80%;
  transform: translate(100%, -50%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #1010106d;
  transition: 0.6s ease;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    border-radius: 10px;
    width: 100vw;
    height: 100%;
    box-shadow: none;
  }

  &:nth-child(3) {
    left: 55%;
    .item {
      display: none;
    }
  }

  &:nth-child(4) {
    left: 65%;
    .item {
      display: none;
    }
  }

  &:nth-child(5) {
    left: 75%;
    .item {
      display: none;
    }
  }

  &:nth-child(n + 6) {
    left: 80%;
    opacity: 0;
    .item {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    &:nth-child(3) {
      left: 70%;
    }
    &:nth-child(4) {
      left: 80%;
    }
    &:nth-child(n + 5) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px 30px 20px;
  color: #eee;
  transform: translate(0, -50%);

  backdrop-filter: blur(3px);


  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, .9) 40%,
    rgba(0, 0, 0, 0.85) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px 0;
    width: 80%;


    opacity: 0;
    animation: showcontent 1s ease-in-out 1 forwards;
  }
  .des {
    font-size: 1.2rem;
    width: 70%;

    padding-bottom: 20px;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.3s 1 forwards;
  }
  .languages {
    font-size: 1.4rem;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.3s 1 forwards;
  }

  .languages li {
    line-height: 2rem;
    list-style: none;
    font-size: 1.1rem;
    font-weight: normal;
  }
  button {
    justify-content: center;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #05636390;
    width: 150px;
    align-items: center;
    opacity: 0;
    a {
      text-decoration: none;
      font-size: 1rem;
      color: #fff;
    }

    &:hover {
      background-color: #16b6b6;
      transition: all 0.5s ease;
    }
    animation: showcontent 1s ease-in-out 0.6s 1 forwards;
  }
  @keyframes showcontent {
    from {
      opacity: 0;
      transform: translate(0, 100px);
      filter: blur(33px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
      filter: blur(0);
    }
  }
`;
