import React from "react";
import { Container, Name, Picture, TextS, Wrapper } from "./views";

const DiscoCard = ({ img, name, text }) => {
  return (
    <Wrapper>
      <Picture src={img} />
      <Name>{name}</Name>

      <TextS>{text}</TextS>
    </Wrapper>
  );
};
export default DiscoCard;
