import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0000008a;
  position: fixed;
  z-index: 9999;
  margin-top: -200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  width: 1000px;
  height: 750px;
  border: 1px solid white;
  background-color: #cbcbcb;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px;
`;
export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 2px solid black;
  font-size: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
`;
export const InputText = styled.textarea`
  width: 100%;

  border: 2px solid black;
  font-size: 30px;
`;
export const Title = styled.div`
  color: black;
  font-size: 36px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;
