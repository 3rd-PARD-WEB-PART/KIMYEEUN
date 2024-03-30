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
          <Icon src={process.env.PUBLIC_URL + "/scrap.svg"} />
          <Icon src={process.env.PUBLIC_URL + "/alert.svg"} />
          <Icon src={process.env.PUBLIC_URL + "/bucket.svg"} />
        </Icons>
        <img src={process.env.PUBLIC_URL + "/smallProfileIcon.svg"} />
        <div>글쓰기</div>
      </Header>

      <MenuRow>
        <div>프로필</div>
        <div>나의 쇼핑</div>
        <div>나의 리뷰</div>
        <div>설정</div>
      </MenuRow>
      <MenuRow>
        <div>모두보기</div>
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
                팔로워 <span>0</span>
              </div>
              <div>
                팔로잉 <span>0</span>
              </div>
            </FollowArea>
            <Setting>설정</Setting>
          </Texts>
          <Hr />
          <ButtonArea>
            <Button>
              <img src={process.env.PUBLIC_URL + "/scrapButton.svg"} />
              <div>스크랩북</div>
              <div>0</div>
            </Button>
            <Button>
              <img src={process.env.PUBLIC_URL + "/heartButton.svg"} />
              <div>좋아요</div>
              <div>0</div>
            </Button>
            <Button>
              <img src={process.env.PUBLIC_URL + "/couponButton.svg"} />
              <div>내 쿠폰</div>
              <div>0</div>
            </Button>
          </ButtonArea>
        </ProfileArea>

        <div>
          <div>
            <div>
              사진 <span>0</span>
            </div>
            <Box>+ 첫 번째 사진을 올려보세요.</Box>
          </div>
          <div>
            <div>
              집들이 <span>0</span>
            </div>
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
  color: #dbdbdb;
  border: none;
  font-size: 16px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Icon = styled.img``;

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
`;
const Button = styled.div`
  display: block;

`;
const Box = styled.div`
  border: dotted 1px #757575;
  width: 750px;
  height: 187.28px;
  text-align: center;
  line-height: 187.28px;
  margin-bottom: 61.77px;
`;
export default Profile;
