import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import { userInfo } from "../../Atom";

function RegisterPage() {
  const [userInfoState, setUserInfoState] = useRecoilState(userInfo);

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, nickname } = e.target.elements;
    const [emailFirst, emailSecond] = email.value.split('@');
    setUserInfoState({
      emailFirst: emailFirst,
      emailSecond: emailSecond,
      password: password.value,
      nickname: nickname.value
    });
    if (!validateEmail(email.value)) {
      alert("유효한 이메일을 입력해주세요.");
      return;
    }
    if (!validatePassword(password.value)) {
      alert("영문과 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.");
      return;
    }
    if (password.value !== confirmPassword.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!validateNickname(nickname.value)) {
      alert("2~15자의 닉네임을 입력해주세요.");
      return;
    }

    console.log (email.value, password.value, confirmPassword.value, nickname.value);
    console.log("유효한 폼");
    alert("회원가입 성공!");
    navigate("/profile");
  };

  const validateEmail = (email) => {
    // 이메일 유효성 검사
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // 비밀번호 유효성 검사
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const validateNickname = (nickname) => {
    // 닉네임 유효성 검사
    return nickname.length >= 2 && nickname.length <= 15;
  };

  return (
    //전체를 감싸는 div
    <div className="App">
      {/*로고가 있는 상단부*/}
      <div className="Title">
        {/* public 폴더에 들어있는 이미지 (로고)를 불러옴 */}
        <img
          className="title-logo"
          alt="오늘의 집 로고"
          src={process.env.PUBLIC_URL + "/Logo.svg"}
        />
      </div>

      {/* 로고 아래 하단부 */}
      <div className="SubApp">
        <div className="signup">회원가입</div>

        {/* 샤용자에게 정보 입력을 받는 폼
                각 항목을 form-part로 묶어줌
                제출 버튼을 누르면 handleSubmit 실행됨*/}
        <form onSubmit={handleSubmit}>
          <div className="form-part">
            <p className="form-subTitle">이메일</p>
            <input
              className="form-textField"
              type="text"
              name="email"
              placeholder="이메일"
            />
          </div>

          <div className="form-part">
            <p className="form-subTitle">비밀번호</p>
            <p className="form-subTitle">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </p>
            <input
              className="form-textField"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>

          <div className="form-part">
            <p className="form-subTitle">비밀번호 확인</p>
            <input
              className="form-textField"
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
            />
          </div>

          <div className="form-part">
            <p className="form-subTitle">닉네임</p>
            <p className="form-subTitle">
              다른 유저와 겹치지 않도록 입력해주세요.(2~15자)
            </p>
            <input
              className="form-textField"
              type="text"
              name="nickname"
              placeholder="별명(2~15자)"
            />
          </div>

          <button className="button" type="submit">
            회원가입하기
          </button>
          <div className="login-area">
            <div>이미 아이디가 있으신가요?</div>
            <div className="my-underline">로그인</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
