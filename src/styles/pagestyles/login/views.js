import styled, { css } from "styled-components";

export const FormWrapper = styled.div`
  width: 1000px;
  height: ${(props) => (props.variant ? "417px" : "666px")};
  border: 1px solid white;
  margin: 0 auto;
  padding: 50px 0;
  box-sizing: border-box;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TabsContainer = styled.div`
  display: flex;
  column-gap: 108px;
`;
export const Tab = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  user-select: none;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 1px solid white;
    `}

  cursor: pointer;
`;
export const Title = styled.div`
  font-size: 26px;
  line-height: 32px;
  margin-top: 36px;
`;

export const Text = styled.div`
  width: 616px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin-top: 30px;
  text-align: center;
`;

// Inputs Styles ===
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  row-gap: 30px;
`;
export const InputLog = styled.input`
  width: 550px;
  background-color: transparent;
  color: white;
  height: 60px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 15px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 22px;

  &::placeholder {
    font-size: 18px;
    line-height: 22px;
    color: #878787;
  }
`;

// === Inputs Styles
