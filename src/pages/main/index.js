import React from "react";
import {
  ArtistsContainer,
  Banner,
  ButtonStyle,
  ConcertsContainer,
  DiscoContainer,
  Left,
  MainContainer,
  NewsContainer,
  Picture,
  Text,
  TextWImageContainer,
  Title,
  Wrapper,
} from "./views";
import Artist from "./Artist/Artist";
import { concertsData, discoData, mainData, newsData } from "./data";
import Button from "@/components/Button";
import NewsCard from "./News";
import DiscoCard from "./Dyscography";
import ConcertItem from "./Concerts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../login";

const MainPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <Wrapper>
      <Banner />
      <MainContainer>
        <Title>Участники группы</Title>

        <ArtistsContainer>
          <Artist
            name={"Тайлер Роберт Джозеф"}
            desc={"(вокал, укулеле, гитара, бас-гитара, клавишные)"}
            img={"/images/Tyler.jpg"}
          />
          <Artist
            name={"Джошуа Уильям Дан"}
            desc={"(ударные, перкуссия, бэк-вокал)"}
            img={"/images/Joshua.jpg"}
          />
        </ArtistsContainer>

        <Title>История группы</Title>

        <Text>
          <ReactMarkdown>{mainData.text1}</ReactMarkdown>
        </Text>
        <TextWImageContainer>
          <Left>
            <Text>{mainData.text2}</Text>
            <Button text="Читать больше" href="/history" />
          </Left>
          <Picture src="/images/Main_Text.jpg" />
        </TextWImageContainer>

        <Title>Новости</Title>
        <NewsContainer>
          {newsData.map((el) => (
            <>
              <NewsCard
                img={el.img}
                name={el.name}
                text1={el.text1}
                text2={el.text2}
              />
            </>
          ))}
        </NewsContainer>
        <ButtonStyle>
          <Button text={"Читать больше"} href={"/news"} />
        </ButtonStyle>

        <Title>Дискография</Title>
        <DiscoContainer>
          {discoData.map((el) => (
            <>
              <DiscoCard img={el.img} name={el.name} text={el.date} />
            </>
          ))}
        </DiscoContainer>
        <ButtonStyle>
          <Button text={"Открыть все"} href={"/discography"} />
        </ButtonStyle>

        <Title>Туры и концерты</Title>

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

        <ButtonStyle>
          <Button text={"Открыть все"} href={"/concerts"} />
        </ButtonStyle>
      </MainContainer>
    </Wrapper>
  );
};
export default MainPage;
