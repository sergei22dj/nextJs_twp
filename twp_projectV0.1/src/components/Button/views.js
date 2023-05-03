import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 270px;
  height: 50px;
  border-radius: 5px;
  background-color: ${(props) => (props.variant2 ? "black" : "#c70b19")};
  display: flex;
  border: ${(props) => (props.variant2 ? "1px solid red" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const Text = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: white;
`;
