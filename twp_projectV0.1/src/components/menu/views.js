import styled from "styled-components";

export const Wrapper = styled.div`
  width: 620px;
  height: 833px;
  padding: 115px 115px 115px 240px;
  box-sizing: border-box;
  background-color: black;

  position: absolute;
  top: 200px;
  left: 0;
  z-index: 9999999;
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const Item = styled.div`
  font-size: 32px;
  line-height: 39px;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;
export const Logo = styled.img`
  margin-top: 76px;
`;
