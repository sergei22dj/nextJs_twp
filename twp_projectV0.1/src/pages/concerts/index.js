import React from "react";
import { Wrapper } from "./views";
import { ConcertsContainer, Title } from "../main/views";
import ConcertItem from "../main/Concerts";
import { concertsData } from "../main/data";
import ConcertBar from "../main/Concerts/ConcertBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../login";

const ConcertsPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <>
      <Title>Туры и коцерты</Title>

      <Wrapper>
        <ConcertBar />
        <ConcertsContainer>
          {concertsData.map((el) => (
            <>
              <ConcertItem
                date={el.date}
                img={el.img}
                name={el.name}
                place={el.place}
              />
            </>
          ))}
        </ConcertsContainer>
        <ConcertsContainer>
          {concertsData.map((el) => (
            <>
              <ConcertItem
                date={el.date}
                img={el.img}
                name={el.name}
                place={el.place}
              />
            </>
          ))}
        </ConcertsContainer>
      </Wrapper>
    </>
  );
};
export default ConcertsPage;
