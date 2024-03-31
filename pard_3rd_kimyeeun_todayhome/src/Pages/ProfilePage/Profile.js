import styled from "styled-components";

function Profile() {
  return (
    <>
      {/* 가장 상단 div */}
      <Header>
        {/* 로고*/}
        <Img src={process.env.PUBLIC_URL + "/Header_1.svg"} />
        {/* 메뉴 */}
        <Menus>
          <Menu>커뮤니티</Menu>
          <Menu>쇼핑</Menu>
          <Menu>인테리어/생활</Menu>
        </Menus>
        {/* 검색창*/}
        <SearchBar>
          <img alt="검색 아이콘" src={process.env.PUBLIC_URL + "/search.svg"} />
          <Search type="text" placeholder="통합검색" />
        </SearchBar>
        <Icons>
          <Icon src={process.env.PUBLIC_URL + "/scrap.svg"} marginRight={21} />
          <Icon src={process.env.PUBLIC_URL + "/alert.svg"} marginRight={18} />
          <Icon
            src={process.env.PUBLIC_URL + "/bucket.svg"}
            marginRight={16.5}
          />
        </Icons>
        <img src={process.env.PUBLIC_URL + "/smallProfileIcon.svg"} />
        <WriteButton>글쓰기</WriteButton>
      </Header>
      <MenuRow fontSize={18}>
        <div>
          <Span>프로필</Span>
        </div>
        <div>나의 쇼핑</div>
        <div>나의 리뷰</div>
        <div>설정</div>
      </MenuRow>
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
            <Setting>설정</Setting>
          </Texts>
          <Hr />
          <ButtonArea>
            <Button>
              <ButtonImg src={process.env.PUBLIC_URL + "/scrapButton.svg"} />
              <ButtonText>스크랩북</ButtonText>
              <BoldSpan>0</BoldSpan>
            </Button>
            <Button>
              <ButtonImg src={process.env.PUBLIC_URL + "/heartButton.svg"} />
              <ButtonText>좋아요</ButtonText>
              <BoldSpan>0</BoldSpan>
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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 86px;
  justify-content: center;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #eaebef;
`;

const Img = styled.img`
  margin-right: 50px;
`;
const Menus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const Menu = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.78px;
  text-align: center;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 30px;
  align-items: center;
  margin-left: 118px;
  margin-right: 29px;
  padding: 5px 11px;
  border: 1px solid #dadde0;
  border-radius: 3px;
`;

const Search = styled.input`
  width: 100%;
  height: 90%;
  margin-left: 11px;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

const WriteButton = styled.div`
  width: 100px;
  height: 43px;
  border-radius: 5px;
  background-color: #35c5f0;
  color: white;
  text-align: center;
  line-height: 43px;
  font-size: 18px;
  margin-left: 40px;
`;
const Icon = styled.img`
  margin-right: ${({ marginRight }) => marginRight}px;
`;

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
