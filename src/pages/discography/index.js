import React from "react";
import { Wrapper } from "./views";
import { DiscoContainer, Title } from "../../styles/pagestyles/main/views";
import DiscoCard from "../main/Dyscography";
import { discoData } from "../main/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../login";

const DiscographyPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }
  return (
    <>
      <Title>Дискография</Title>
      <Wrapper>
        <DiscoContainer>
          {discoData.map((el) => (
            <>
              <DiscoCard img={el.img} name={el.name} text={el.date} />
            </>
          ))}
        </DiscoContainer>
        <DiscoContainer>
          {discoData.map((el) => (
            <>
              <DiscoCard img={el.img} name={el.name} text={el.date} />
            </>
          ))}
        </DiscoContainer>
        <DiscoContainer>
          {discoData.map((el) => (
            <>
              <DiscoCard img={el.img} name={el.name} text={el.date} />
            </>
          ))}
        </DiscoContainer>
        <DiscoContainer>
          {discoData.map((el) => (
            <>
              <DiscoCard img={el.img} name={el.name} text={el.date} />
            </>
          ))}
        </DiscoContainer>
      </Wrapper>
    </>
  );
};
export default DiscographyPage;
