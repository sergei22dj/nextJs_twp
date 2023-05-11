import React from "react";
import {
  Container,
  Name,
  Picture,
  TextS,
  Wrapper,
} from "../../../styles/pagestyles/main/News/views";

const NewsCard = ({ img, name, text1, text2 }) => {
  return (
    <Wrapper>
      <Picture src={img} />
      <Name>{name}</Name>
      <Container>
        <TextS>{text1}</TextS>
        <TextS>{text2}</TextS>
      </Container>
    </Wrapper>
  );
};
export default NewsCard;
