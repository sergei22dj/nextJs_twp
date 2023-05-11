import React from "react";
import {
  Container,
  Select,
  Text,
  Wrapper,
} from "../../../../styles/pagestyles/main/Concerts/ConcertBar/views";

const ConcertBar = () => {
  return (
    <Wrapper>
      <Text>Предстоящие события</Text>
      <Container>
        <Select>
          <Text>2022 г.</Text>
          <img src="/images/Select_Arrow.svg" alt="asd" />
        </Select>
        <Select>
          <Text>май</Text>
          <img src="/images/Select_Arrow.svg" alt="asd" />
        </Select>
      </Container>
    </Wrapper>
  );
};
export default ConcertBar;
