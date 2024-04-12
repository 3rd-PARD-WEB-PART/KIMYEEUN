import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const defaultEmailFirst = "webpart";
  const defaultEmailSecond = "pard.com";
  const defaultNickName = "팡일Kim";
  const defaultHomePage = "we-pard.com";
  const defaultGender = "여성";
  const defaultBirth = "2024.01.01";
  const defaultSelectedFile = "/DefaultProfileImage.svg";
  const defaultBio = "안녕하세요 웹파트 과제입니다";

  const [emailFirst, setEmailFirst] = useState(defaultEmailFirst);
  const [emailSecond, setEmailSecond] = useState(defaultEmailSecond);
  const [nickName, setNickName] = useState(defaultNickName);
  const [homePage, setHomePage] = useState(defaultHomePage);
  const [gender, setGender] = useState(defaultGender);
  const [birth, setBirth] = useState(defaultBirth);
  const [selectedFile, setSelectedFile] = useState(defaultSelectedFile);
  const [bio, setBio] = useState(defaultBio);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(imageUrl);
  };

  const handleEditButtonClick = () => {
    console.log("수정된 정보:", {
      emailFirst,
      emailSecond,
      nickName,
      homePage,
      gender,
      birth,
      selectedFile,
      bio,
    });
    moveToProfile();
  };

  const navigate = useNavigate();
  const moveToProfile = () => {
    navigate("/profile");
  };

  return (
    <>
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
      <Div>
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
                    <GetEmail
                      type="text"
                      value={emailFirst}
                      onChange={(e) => handleInputChange(e, setEmailFirst)}
                    />
                    <Small>@</Small>
                    <GetEmail
                      type="text"
                      value={emailSecond}
                      onChange={(e) => handleInputChange(e, setEmailSecond)}
                    />
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
                <Input
                  type="text"
                  value={nickName}
                  onChange={(e) => handleInputChange(e, setNickName)}
                />
              </FormPart>
              <FormPart>
                <FormLabel>홈페이지</FormLabel>
                <Input
                  type="text"
                  value={homePage}
                  onChange={(e) => handleInputChange(e, setHomePage)}
                />
              </FormPart>
              <FormPart>
                <FormLabel>성별</FormLabel>
                <RadioOption>
                  <RadioLabel>
                    <RadioButton
                      type="radio"
                      name="gender"
                      value="남성"
                      checked={gender === "남성"}
                      onChange={(e) => handleInputChange(e, setGender)}
                    />
                    남성
                  </RadioLabel>
                  <RadioLabel>
                    <RadioButton
                      type="radio"
                      name="gender"
                      value="여성"
                      checked={gender === "여성"}
                      onChange={(e) => handleInputChange(e, setGender)}
                    />
                    여성
                  </RadioLabel>
                </RadioOption>
              </FormPart>
              <FormPart>
                <FormLabel>생년월일</FormLabel>
                <Input
                  type="text"
                  value={birth}
                  onChange={(e) => handleInputChange(e, setBirth)}
                />
              </FormPart>
              <FormPart justify="none">
                <FormLabel alignSelf="flex-start">프로필 이미지</FormLabel>
                <div>
                  <ProfileImage
                    src={selectedFile}
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                  />
                </div>
              </FormPart>
              <FormPart>
                <FormLabel>한줄 소개</FormLabel>
                <Input
                  type="text"
                  value={bio}
                  onChange={(e) => handleInputChange(e, setBio)}
                />
              </FormPart>
            </FormArea>
          </Under>
          <EditButtonWrapper>
            <EditButton onClick={handleEditButtonClick}>수정하기</EditButton>
          </EditButtonWrapper>
        </Body>
      </Div>
    </>
  );
}

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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 70%;
  /* height: 856px; */
  box-shadow: 0px 1px 3px 0px #00000033;
  padding: 50px;
  margin-bottom: 33px;
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
  display: flex;
  flex-direction: column;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
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
  min-width: 100px;
  text-align: left;
  color: #292929;
  align-self: ${(props) => props.alignSelf || ""};
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
const ProfileImage = styled.img`
  width: 198px;
  height: 198px;
`;
const RadioLabel = styled.label`
  display: flex;
  color: #292929;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.15px;
  text-align: center;
  align-items: center;
`;
const RadioOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  gap: 10px;
`;
const RadioButton = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border-radius: 25px;
  border: 2px solid #dbdbdb;
  &:checked {
    border: 5px solid #35c5f0;
  }
`;
const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const EditButton = styled.div`
  margin-top: 14px;
  width: 100px;
  height: 43px;
  border-radius: 5px;
  background-color: #35c5f0;
  color: white;
  text-align: center;
  line-height: 43px;
  font-size: 18px;
  cursor: pointer;
`;
export default EditProfile;
