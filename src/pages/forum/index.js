import React, { useEffect, useReducer, useState } from "react";
import {
  AddInput,
  AddThemeBar,
  Avatar,
  AvatarS,
  MainWrapper,
  Name,
  SideBarWrapper,
  SideBox,
  SideContainer,
  SideEdit,
  SideText,
  ThemesWrapper,
  Wrapper,
} from "../../styles/pagestyles/forum/ThemeItem/views";
import Button from "@/components/Button";
import { Title } from "../../styles/pagestyles/main/views";
import { useSession } from "next-auth/react";
import ThemeItem from "./ThemeItem";
import axios from "axios";
import ModalForm from "./modalForm";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import Login from "../login";

const Forum = () => {
  const { data: session } = useSession();

  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    themename: "",
    author: "asdas",
    text: "Hello",
  });
  const [modal, setModal] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handlerOnChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/api/query/get_themes").then((res) => {
        setThemes(res.data);
      });
    } catch (error) {}
    setLoading(false);
  }, [modal, loading]);

  if (!session) {
    return <Login />;
  }
  return (
    <>
      {modal && <ModalForm setModal={setModal} update={forceUpdate} />}

      <Title>Форум</Title>
      <Wrapper>
        <SideBarWrapper>
          <SideContainer>
            <SideBox>
              <Avatar src="/images/Avatar.png" />
              <Name>{session?.user?.email}</Name>
              <SideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </SideText>
              <SideEdit src="/images/Edit_Icon.svg" />
            </SideBox>
            <div onClick={() => setModal(true)}>
              <Button text={"Добавить тему"} />
            </div>
          </SideContainer>
        </SideBarWrapper>

        <MainWrapper>
          <AddThemeBar>
            <AvatarS src="/images/Avatar.png" />
            <AddInput
              placeholder="Добавить тему"
              value={data.themename}
              onChange={(e) => handlerOnChange(e)}
              name="themename"
            />
          </AddThemeBar>
          {loading ? (
            <Title>LOADING ...</Title>
          ) : (
            <ThemesWrapper>
              {themes.map((el) => (
                <>
                  <ThemeItem
                    text={el.text}
                    author={el.author}
                    themename={el.themename}
                    comments={el.comments}
                    id={el._id}
                  />
                </>
              ))}
            </ThemesWrapper>
          )}
        </MainWrapper>
      </Wrapper>
    </>
  );
};
export default Forum;
