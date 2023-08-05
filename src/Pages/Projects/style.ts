import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  left: 50%;
  border-radius: 50px;

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
    top:80%;
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
  }
  
  &:nth-child(4) {
    left: 60%;
  }
  
  &:nth-child(5) {
    left: 70%;
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
    display: none;
  
  
  &:nth-child(2) {
    display: block;
    z-index: 1000;
  }
`;