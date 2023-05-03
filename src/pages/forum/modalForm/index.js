import React, { useState } from "react";
import {
  ButtonWrapper,
  ContentWrapper,
  Input,
  InputText,
  Title,
  Wrapper,
} from "./views";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import axios from "axios";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import styles from "./css.module.css";

const ModalForm = ({ setModal, update }) => {
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contentState, setContentState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    themename: "",
    text: "contentState",
    author: session.user.email,
    comments: [],
  });

  const handleContentStateChange = (contentState) => {
    setContentState(draftToHtml(contentState));
    setData((prev) => ({ ...prev, text: draftToHtml(contentState) }));
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const { themename, text } = data;

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addTheme = () => {
    setLoading(true);
    try {
      axios.post("http://localhost:3000/api/query/set_themes", data);
      setModal(false);
    } catch (error) {}

    setLoading(false);
    update();
  };
  const now = new Date();
  console.log("data:    ", now);
  //prettier-ignore
  return (
    <Wrapper onClick={() => setModal(false)}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <Title>Название темы:</Title>
        <Input
          value={themename}
          name="themename"
          onChange={(e) => inputHandler(e)}
        />
        <Title>Текст темы:</Title>

        <Editor
          editorState={editorState}
          toolbarClassName={styles.toolbarClassName}
          editorClassName={styles.editor}
          onEditorStateChange={handleEditorStateChange}
          onContentStateChange={handleContentStateChange}
          toolbar={{
            options: ["inline", "blockType", "fontSize", "fontFamily"],
          }}
          spellCheck
          wrapperStyle={{


            color: "black",
  
            fontSize: "30px",
            boxSizing: 'border-box'

          }}
        />
        <ButtonWrapper style={{ marginLeft: "auto" }} onClick={() => addTheme()}>
          <Button text={loading ? "..." : "Добавить тему"} />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ModalForm;
