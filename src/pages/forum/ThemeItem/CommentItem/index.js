import React from "react";
import {
  AuthorContainer,
  AuthorInfoContainer,
  AuthorName,
  AuthorTime,
  TextArea,
  Title,
  TitleContainer,
  TitleName,
  Wrapper,
} from "./views";
import { AvatarXS } from "../../../../styles/pagestyles/forum/ThemeItem/views";

const CommentItem = ({ author, text }) => {
  return (
    <Wrapper>
      <AuthorContainer>
        <AvatarXS src="/images/Avatar.png" />
        <AuthorInfoContainer>
          <AuthorName>{author}</AuthorName>
          <AuthorTime>1 минуту назад</AuthorTime>
        </AuthorInfoContainer>
      </AuthorContainer>
      <TextArea dangerouslySetInnerHTML={{ __html: text }}></TextArea>
    </Wrapper>
  );
};
export default CommentItem;
