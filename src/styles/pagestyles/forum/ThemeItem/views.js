import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 240px;
  box-sizing: border-box;
  display: flex;
  column-gap: 80px;
`;
export const SideBarWrapper = styled.div`
  width: 360px;
`;
export const MainWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const ThemesWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 30px;
`;
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  align-items: center;
`;
export const SideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 267px;
  padding: 14px 29px 25px 29px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;
export const AvatarS = styled.img`
  width: 50px;
  height: 50px;
`;
export const AvatarXS = styled.img`
  width: 40px;
  height: 40px;
`;
export const Name = styled.div`
  margin-top: 14px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: black;
`;
export const SideText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;
export const SideEdit = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const AddThemeBar = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  box-sizing: border-box;
`;
export const AddInput = styled.input`
  width: 896px;
  height: 36px;
  font-size: 14px;
  line-height: 22px;
  color: black;

  &::placeholder {
    font-size: 14px;
    line-height: 22px;
    color: black;
  }
`;
