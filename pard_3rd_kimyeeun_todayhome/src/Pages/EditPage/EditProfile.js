import styled from "styled-components";

function EditProfile() {
  return (
    <Div>
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
      <MenuRow gap={51} fontSize={18}>
        <div>프로필</div>
        <div>나의 쇼핑</div>
        <div>나의 리뷰</div>
        <div>
          <Span>설정</Span>
        </div>
      </MenuRow>
      <MenuRow gap={25} fontSize={15}>
        <div>
          <Span>회원정보수정</Span>
        </div>
        <div>알림 설정</div>
        <div>사용자 숨기기 설정</div>
        <div>전문가 신청</div>
        <div>비밀번호 변경</div>
        <div>추천코드</div>
      </MenuRow>
      <Body>
        <Top>
          <Title>회원정보수정</Title>
          <Out>탈퇴하기</Out>
        </Top>

        <Under>
          <FormArea>
            <FormPart>
              <FormLeft>
                <FormLabel>이메일</FormLabel>
                <Required>* 필수항목</Required>
              </FormLeft>
              <EmailArea>
                <EmailInput>
                  <GetEmail type="text" />
                  <Small>@</Small>
                  <GetEmail type="text" />
                </EmailInput>
                <Alert>
                  이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
                </Alert>
              </EmailArea>
            </FormPart>
            <FormPart>
              <FormLeft>
                <FormLabel>별명</FormLabel>
                <Required>* 필수항목</Required>
              </FormLeft>
              <Input type="text" />
            </FormPart>
            <FormPart>
              <FormLabel>홈페이지</FormLabel>
              <Input type="text" />
            </FormPart>
            <FormPart>
              <FormLabel>성별</FormLabel>
              <label>
                <input type="radio" name="gender" value="남성" />
                남성
              </label>
              <label>
                <input type="radio" name="gender" value="여성" />
                여성
              </label>
            </FormPart>
            <FormPart>
              <FormLabel>생년월일</FormLabel>
              <Input type="text" />
            </FormPart>
            <FormPart>
              <FormLabel>한줄 소개</FormLabel>
              <Input type="text" />
            </FormPart>
          </FormArea>
        </Under>
        <WriteButton>수정하기</WriteButton>
      </Body>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
  font-family: Inter;
  font-weight: 700;
  line-height: 21.78px;
  text-align: center;
  height: 65px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #eaebef;
  align-items: center;
  gap: ${({ gap }) => gap}px;
  font-size: ${({ fontSize }) => fontSize}px;
`;

const Span = styled.span`
  color: #35c5f0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 1236px;
  height: 856px;
  box-shadow: 0px 1px 3px 0px #00000033;
  padding: 50px;
`;

const FormArea = styled.div`
  background-color: aliceblue;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
`;
const Title = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  /* line-height: 29.05px; */
  text-align: center;
`;
const Out = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: center;
  color: #f05656;
  text-decoration: underline;
  cursor: pointer;
`;
const Under = styled.div`
  /* margin-top: 69px; */
`;
const FormPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FormLabel = styled.div`
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  /* line-height: 18.15px; */
  text-align: center;
  color: #292929;
`;
const Required = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: center;
  color: #757575;
`;
const EmailArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Alert = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  /* line-height: 15.73px; */
  text-align: left;
  font-variation-settings: "slnt" 0;
  color: #9e9e9e;
  margin-top: 10px;
`;
const GetEmail = styled.input`
  border: 1px solid #dbdbdb;
  width: 190px;
  height: 40px;
  border-radius: 6px;
`;
const Small = styled.div`
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  /* line-height: 18.15px; */
  text-align: center;
  color: #dbdbdb;
`;
const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
`;
export default EditProfile;
