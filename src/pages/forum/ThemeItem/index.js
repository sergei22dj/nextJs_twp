import React, { useEffect, useState } from "react";
import {
  Answer,
  AnswerName,
  AuthorContainer,
  AuthorInfoContainer,
  AuthorName,
  AuthorTime,
  BottomContainer,
  ButtonStyle,
  Counter,
  Icon,
  IconBlock,
  IconsBar,
  Tag,
  TagsBar,
  TextArea,
  Title,
  TitleContainer,
  TitleName,
  Wrapper,
} from "../../../styles/pagestyles/forum/ThemeItem/CommentItem/views";
import { AvatarXS } from "../../../styles/pagestyles/forum/ThemeItem/views";
import CommentItem from "./CommentItem";

import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import styles from ".././modalForm/css.module.css";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";
import axios from "axios";

const ThemeItem = ({ author, text, themename, id }) => {
  const [commentsView, setCommentsView] = useState(false);
  const [editorView, setEditorView] = useState(false);

  const [comments, setComments] = useState();

  const { data: session } = useSession();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contentState, setContentState] = useState(null);
  const [data, setData] = useState({
    text: "Empty",
    author: session?.user?.email || "",
    id: id,
  });

  const handleContentStateChange = (contentState) => {
    setContentState(draftToHtml(contentState));
    setData((prev) => ({ ...prev, text: draftToHtml(contentState) }));
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const addComment = () => {
    axios.post("http://localhost:3000/api/query/update_theme", data);
  };

  const buttonHandler = () => {
    addComment();
    setEditorView(false);
  };

  useEffect(() => {
    try {
      axios
        .post("http://localhost:3000/api/query/get_comments", { id: id })
        .then((res) => {
          setComments(res.data[0]?.comments);
        });
    } catch (error) {}
  }, [editorView, comments]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Тема: </Title>
        <TitleName>{themename}</TitleName>
      </TitleContainer>
      <AuthorContainer>
        <AvatarXS src="/images/Avatar.png" />
        <AuthorInfoContainer>
          <AuthorName>{author}</AuthorName>
          <AuthorTime>1 минуту назад</AuthorTime>
        </AuthorInfoContainer>
      </AuthorContainer>
      <TextArea dangerouslySetInnerHTML={{ __html: text }}></TextArea>
      <BottomContainer>
        <TagsBar>
          <Tag>TWP</Tag>
          <Tag>pilots</Tag>
        </TagsBar>
        <IconsBar>
          <IconBlock>
            <Icon src="/images/Eye_Icon.svg" />
            <Counter>123</Counter>
          </IconBlock>
          <IconBlock
            onClick={() => [
              setCommentsView(!commentsView),
              setEditorView(commentsView || true),
            ]}
          >
            <Icon src="/images/Message_Icon.svg" />
            <Counter>{comments?.length || 0}</Counter>
          </IconBlock>
          <IconBlock>
            <Icon src="/images/Arrow_Icon.svg" />
            <Counter>123</Counter>
          </IconBlock>
        </IconsBar>
      </BottomContainer>
      {comments && commentsView ? (
        <>
          <Answer>
            Ответить <AnswerName>@{author}</AnswerName>
          </Answer>
          {editorView && (
            <>
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
                  boxSizing: "border-box",
                }}
              />

              <ButtonStyle onClick={() => buttonHandler()}>
                <Button text={"Отправить"} />
              </ButtonStyle>
            </>
          )}

          {comments.map((el) => (
            <>
              <CommentItem author={el.author} text={el.text} />
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
export default ThemeItem;
