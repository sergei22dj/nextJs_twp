import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 240px;
`;
export const TextWImageContainer = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: ${(el) => (el.two ? "52px" : "45px")};
`;
export const TextWImageContainerRev = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
  column-gap: 45px;
`;
export const Picture = styled.img`
  width: 581px;
  height: 296px;
  border-radius: 5px;
`;
export const More = styled.div`
  color: #878787;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-top: 20px;
  border-bottom: 1px solid #878787;
  width: fit-content;
  cursor: pointer;
`;
