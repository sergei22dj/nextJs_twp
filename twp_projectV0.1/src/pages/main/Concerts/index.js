import React from "react";
import {
  Date,
  Icon,
  InfoContainer,
  Name,
  Picture,
  Place,
  Wrapper,
} from "./views";

const ConcertItem = ({ date, name, place, img }) => {
  return (
    <Wrapper>
      <Date>{date}</Date>
      <InfoContainer>
        <Name>
          <Icon src="/images/Date_Icon.svg" />
          {name}
        </Name>
        <Place>
          <Icon src="/images/Place_Icon.svg" />
          {place}
        </Place>
      </InfoContainer>
      <Picture src={img} />
    </Wrapper>
  );
};
export default ConcertItem;
