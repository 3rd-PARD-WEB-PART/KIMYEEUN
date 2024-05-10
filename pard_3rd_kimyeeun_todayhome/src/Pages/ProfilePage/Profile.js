import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const navigate = useNavigate();
  const moveToEdit = () => {
    navigate("/editProfile");
  };

  //하트 아이콘을 누를 떄
  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
    setLikeCount(likeCount + (isIconClicked ? -1 : 1));
  };

  //버튼 클릭 상태에 따라 다른 이미지가 보이도록 함
  const buttonImgSrc = isIconClicked
    ? process.env.PUBLIC_URL + "/heartButtonPressed.svg"
    : process.env.PUBLIC_URL + "/heartButton.svg";

  return (
    <>
      <MenuRow fontSize={15}>
        <div>
          <Span>모두보기</Span>
        </div>
        <div>사진</div>
        <div>집들이</div>
        <div>노하우</div>
        <div>질문과답변</div>
        <div>스크랩북</div>
        <div>좋아요</div>
      </MenuRow>
      <Body>
        <ProfileArea>
          <BoxFlex>
            <ProfileIcon
              alt="프로필 아이콘"
              src={process.env.PUBLIC_URL + "/profileIcon.svg"}
            />
            <Texts>
              <Name>예은KIM</Name>
              <FollowFlex>
                <FollowArea>
                  <div>
                    팔로워 <BoldSpan>0</BoldSpan>
                  </div>
                  <div>
                    팔로잉 <BoldSpan>0</BoldSpan>
                  </div>
                </FollowArea>
                <Setting onClick={moveToEdit}>설정</Setting>
              </FollowFlex>
            </Texts>
          </BoxFlex>
          <Hr />
          <ButtonArea>
            <Button>
              <ButtonImg src={process.env.PUBLIC_URL + "/scrapButton.svg"} />
              <ButtonText>스크랩북</ButtonText>
              <BoldSpan>0</BoldSpan>
            </Button>
            <Button>
              <ButtonImg src={buttonImgSrc} onClick={handleIconClick} />{" "}
              <ButtonText>좋아요</ButtonText>
              <BoldSpan>{likeCount}</BoldSpan>
            </Button>
            <Button>
              <ButtonImg src={process.env.PUBLIC_URL + "/couponButton.svg"} />
              <ButtonText>내 쿠폰</ButtonText>
              <BoldSpan>0</BoldSpan>
            </Button>
          </ButtonArea>
        </ProfileArea>

        <div>
          <div>
            <BoxText>
              사진 <Span>0</Span>
            </BoxText>
            <Box>+ 첫 번째 사진을 올려보세요.</Box>
          </div>
          <div>
            <BoxText>
              집들이 <Span>0</Span>
            </BoxText>
            <Box>+ 첫 번째 집들이를 올려보세요.</Box>
          </div>
        </div>
      </Body>
    </>
  );
}
const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 51px;
  font-family: Inter;
  font-weight: 700;
  line-height: 21.78px;
  text-align: center;
  height: 65px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #eaebef;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize}px;
  div {
    white-space: nowrap;
    cursor: pointer;
  }
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  gap: 153px;
  margin-top: 30.88px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ProfileArea = styled.div`
  display: flex;

  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding-top: 31px;
  
  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    height: 300px;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    width: 285px;
    height: 460.24px;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;

  }
`;

const BoxFlex = styled.div`
  display: flex;

  @media (max-width: 767px) {
    width: 285px;
    height: 460.24px;
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 285px;
    height: 460.24px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) {
    width: 285px;
    height: 460.24px;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileIcon = styled.img`
  width: 130px;
  height: 129.5px;
  margin-bottom: 25px;

  @media (max-width: 767px) {
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 25px;
  }

  @media (min-width: 1024px) {
  }
`;
const BoxText = styled.div`
  font-weight: bold;
  margin-bottom: 21px;
  font-size: 18px;
  /* align-items: left; */
`;
const Span = styled.span`
  color: #35c5f0;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-left: 15px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 15px;
  }

  @media (min-width: 1024px) {
    align-items: center;
  }
`;
const Name = styled.div`
  font-family: Inter;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.47px;

  margin-bottom: 13px;

  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
    text-align: center;
  }
`;
const FollowFlex = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
    align-items: center;
  }
`;
const FollowArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Setting = styled.div`
  width: 60px;
  height: 34.87px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  line-height: 34.87px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 30px;
  cursor: pointer;
`;
const Hr = styled.hr`
border: 0;
height: 1px;
  background: #eaebef;
  margin-bottom: 28.39px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    align-self: center;
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 231px;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  text-align: center;
  gap: 30px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  display: block;
`;
const ButtonImg = styled.img`
  margin-bottom: 10px;
`;

const ButtonText = styled.div`
  margin-bottom: 6px;
`;
const BoldSpan = styled.span`
  font-weight: bold;
`;
const Box = styled.div`
  border: dashed 1px #757575;

  height: 187.28px;
  text-align: center;
  line-height: 187.28px;
  margin-bottom: 61.77px;

  @media (max-width: 767px) {
    width: 700px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 735px;
  }

  @media (min-width: 1024px) {
    width: 750px;
  }
`;
export default Profile;
