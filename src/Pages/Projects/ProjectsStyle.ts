import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  left: 50%;

  transform: translate(-50%);
  width: 100%;
  height: 60vh;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 30px 50px #fff;

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
  width: 10vw;
  height: 10vh;
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
    width: 100%;
    height: 100%;
    box-shadow: none;
  }

  &:nth-child(3) {
    left: 50%;
    .item {
      display: none;
    }
  }

  &:nth-child(4) {
    left: 60%;
    .item {
      display: none;
    }
  }

  &:nth-child(5) {
    left: 70%;
    .item {
      display: none;
    }
  }

  &:nth-child(n + 6) {
    left: 80%;
    opacity: 0;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  padding: 0;
  color: #eee;
  transform: translate(0, -50%);

  .name {
    font-size: 50px;
    font-weight: bold;
    opacity: 0;
    animation: showcontent 1s ease-in-out 1 forwards;
  }
  .des {
    font-size: 13px;
    margin: 20px 0;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.3s 1 forwards;
  }
  button {
    justify-content: center;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #05636390;
    color: #fff;
    font-size: 1.2rem;
    align-items: center;
    opacity: 0;

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
