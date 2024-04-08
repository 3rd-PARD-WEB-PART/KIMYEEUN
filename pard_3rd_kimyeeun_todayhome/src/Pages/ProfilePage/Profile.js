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
          <ProfileIcon
            alt="프로필 아이콘"
            src={process.env.PUBLIC_URL + "/profileIcon.svg"}
          />
          <Texts>
            <Name>예은KIM</Name>
            <FollowArea>
              <div>
                팔로워 <BoldSpan>0</BoldSpan>
              </div>
              <div>
                팔로잉 <BoldSpan>0</BoldSpan>
              </div>
            </FollowArea>
            <Setting onClick = {moveToEdit}>설정</Setting>
          </Texts>
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
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 153px;
  margin-top: 30.88px;
`;

const ProfileArea = styled.div`
  width: 285px;
  height: 460.24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding-top: 31px;
`;

const ProfileIcon = styled.img`
  width: 130px;
  height: 129.5px;
  margin-bottom: 25px;
`;
const BoxText = styled.div`
  font-weight: bold;
  margin-bottom: 21px;
  font-size: 18px;
`;
const Span = styled.span`
  color: #35c5f0;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  font-family: Inter;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.47px;
  text-align: center;
  margin-bottom: 13px;
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
  width: 231px;
  color: #eaebef;
  margin-bottom: 28.39px;
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-align: center;
  gap: 30px;
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
  width: 750px;
  height: 187.28px;
  text-align: center;
  line-height: 187.28px;
  margin-bottom: 61.77px;
`;
export default Profile;
