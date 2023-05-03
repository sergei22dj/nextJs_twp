import styled from "styled-components";

export const Wrapper = styled.div``;
export const Banner = styled.div`
  background-image: url("/images/Main_Bg.jpg");
  height: 832px;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const MainContainer = styled.div`
  padding: 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextWImageContainer = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 45px;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
export const Picture = styled.img`
  width: 581px;
  height: 375px;
  border-radius: 5px;
`;
export const ArtistsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 228px;
  margin-top: 45px;
  font-weight: 400;
`;
export const Title = styled.div`
  font-size: 40px;
  margin-top: 90px;
  margin-bottom: 45px;
  width: 100%;
  text-align: center;
`;
export const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;
export const NewsContainer = styled.div`
  display: flex;
  column-gap: 30px;
`;
export const DiscoContainer = styled.div`
  display: flex;
  column-gap: 90px;
`;
export const ConcertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  width: 100%;
`;
export const ButtonStyle = styled.div`
  margin-top: 51px;
`;
