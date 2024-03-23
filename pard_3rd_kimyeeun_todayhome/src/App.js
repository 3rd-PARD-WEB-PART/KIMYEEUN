import "./App.css";

function App() {
  return (
    <div className="App">
      <div>

        <div className="Title">
          <img
            className="title-logo"
            src={process.env.PUBLIC_URL + "/Logo.svg"}
          />
        </div>

        <div className="SubApp">
          <div className ="signup">회원가입</div>

          <div>
            <div className="form-part">
              <p className="form-subTitle">이메일</p>
              <input className="form-textField" type="text" placeholder ="이메일"/>
            </div>

            <div className="form-part">
              <p className="form-subTitle">비밀번호</p>
              <p className="form-subTitle">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
              <input className="form-textField" type="text" placeholder ="비밀번호"/>
            </div>

            <div className="form-part">
              <p className="form-subTitle">비밀번호 확인</p>
              <input className="form-textField" type="text" placeholder ="비밀번호 확인"/>
            </div>

            <div className="form-part">
              <p className="form-subTitle">닉네임</p>
              <p className="form-subTitle">다른 유저와 겹치지 않도록 입력해주세요.(2~15자)</p>
              <input className="form-textField" type="text" placeholder ="별명(2~15자)" />
            </div>

            <button className="button">회원가입하기</button>
            <div className="login-area">
              <div>이미 아이디가 있으신가요?</div>
              <div className ="my-underline">로그인</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
