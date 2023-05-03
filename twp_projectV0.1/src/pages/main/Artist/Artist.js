import React from "react";
import { Desc, Name, Picture, Wrapper } from "./views";

const Artist = ({ img, name, desc }) => {
  return (
    <Wrapper>
      <Picture src={img} />
      <Name>{name}</Name>
      <Desc>{desc}</Desc>
    </Wrapper>
  );
};
export default Artist;
