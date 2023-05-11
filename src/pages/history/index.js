import React from "react";
import {
  More,
  Picture,
  TextWImageContainer,
  TextWImageContainerRev,
  Wrapper,
} from "../../styles/pagestyles/history/views";
import { Text, Title } from "../../styles/pagestyles/main/views";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { historyData } from "./data";
import { mainData } from "../main/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../login";

const History = () => {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }
  return (
    <Wrapper>
      <Title>История группы</Title>
      <Text>
        <ReactMarkdown>{mainData.text1}</ReactMarkdown>
      </Text>
      <TextWImageContainer>
        <Text>
          <ReactMarkdown>{historyData.text2}</ReactMarkdown>
        </Text>
        <Picture src="/images/History1.jpg" />
      </TextWImageContainer>
      <TextWImageContainer two={true}>
        <Picture src="/images/History2.jpg" />
        <Text>
          <ReactMarkdown>{historyData.text3}</ReactMarkdown>
        </Text>
      </TextWImageContainer>

      <Text style={{ marginTop: "23px" }}>
        <ReactMarkdown>{historyData.text4}</ReactMarkdown>
      </Text>
      <Text style={{ marginTop: "23px" }}>
        <ReactMarkdown>{historyData.text5}</ReactMarkdown>
      </Text>
      <More>Читать полностью</More>
    </Wrapper>
  );
};
export default History;
