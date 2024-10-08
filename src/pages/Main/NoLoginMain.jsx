import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #e5e5e5 0%, #ffffff 100%);
`;

const HeaderPlaceholder = styled.div`
  height: 12.5rem;
  background: #d3d3d3;
  margin-bottom: 1.25rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  flex-grow: 1;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: 1.25rem;
  font-weight: lighter;
  text-align: center;
`;

const Title2 = styled.h1`
  color: #35648c;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#35648C" : "white")};
  color: ${(props) => (props.primary ? "white" : "#000")};
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
`;

const Cards = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  justify-items: center;
`;

const Card = styled.div`
  border-radius: 21.973px;
  background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
  box-shadow: 0px 3.516px 3.516px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: left;
  width: 19.5rem;
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background: lightgray;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 17.579px;
  font-weight: 500;
  margin-left: 0.5rem;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled.div`
  position: relative;
  color: #fff;
  font-size: 14.063px;
  font-weight: 400;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -0.3rem;
  margin-left: 0.5rem;
`;

const CardCategory = styled.div`
  color: #fff;
  font-size: 11.426px;
  font-weight: 300;
  position: absolute;
  margin-top: -3.2rem;
  margin-left: 13.8rem;
  text-align: right;
  width: 3rem;
`;

const ViewMoreContainer = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  margin-top: 7.25rem;
`;

const ViewMoreButton = styled.button`
  background-color: #35648c;
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.Large};
`;

const cardData = [
  {
    title: "안녕",
    description: "힐링인데",
    category: "힐링",
    location: "서울",
    district: "강남구",
  },
  {
    title: "가",
    description: "장소 소개",
    category: "휴식 장소",
    location: "부산",
    district: "해운대구",
  },
  {
    title: "나",
    description: "취미활동",
    category: "취미",
    location: "대구",
    district: "수성구",
  },
  {
    title: "다",
    description: "힐링",
    category: "힐링",
    location: "서울",
    district: "강북구",
  },
  {
    title: "라",
    description: "놀이",
    category: "휴식 장소",
    location: "부산",
    district: "금정구",
  },
  {
    title: "마",
    description: "취미",
    category: "취미",
    location: "대구",
    district: "북구",
  },
];

const NoLoginMain = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginHeader />
      <HeaderPlaceholder />
      <MainContent>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
          width={"50px"}
          height={"50px"}
          id="logo"
        />
        <Title>
          맞춤형 쉼은 성격 검사 결과를 통해 파악된 맞춤 쉼 활동을
          <br />
          AI가 카테고리 별, 가까운 장소로 정리해서 보여줍니다.
        </Title>
        <ButtonContainer>
          <Button onClick={() => navigate("/login")}>로그인 하러 가기</Button>
          <Button primary onClick={() => navigate("/sign-up")}>
            회원가입 하러 가기
          </Button>
        </ButtonContainer>

        <Cards>
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardImage />
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardCategory>{card.category}</CardCategory>
            </Card>
          ))}
        </Cards>

        <ViewMoreContainer>
          <Title2>휴에서 준비한 맞춤형 쉼을 더 보고싶다면?</Title2>
          <ViewMoreButton onClick={() => navigate("/more")}>
            더 많은 컨텐츠 보러가기
          </ViewMoreButton>
        </ViewMoreContainer>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default NoLoginMain;
