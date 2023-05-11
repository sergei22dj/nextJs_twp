import React from "react";
import { Wrapper } from "../../styles/pagestyles/news/views";
import { NewsContainer, Title } from "../../styles/pagestyles/main/views";
import NewsCard from "../main/News";
import { newsData } from "../main/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../login";

const NewsPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default NewsPage;
