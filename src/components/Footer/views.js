import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 121px;
  height: 300px;
  padding: 0 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 680px;
  height: 140px;
  margin-right: 110px;
  cursor: pointer;
`;
export const Button = styled.img``;
export const Item = styled.div`
  font-size: 22px;
  line-height: 27px;
  color: white;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #c70b19;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
