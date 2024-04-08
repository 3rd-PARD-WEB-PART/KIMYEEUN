import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const moveTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header>
        <Img src={process.env.PUBLIC_URL + "/Header_1.svg"} />
        <Menus>
          <Menu>커뮤니티</Menu>
          <Menu>쇼핑</Menu>
          <Menu>인테리어/생활</Menu>
        </Menus>
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
        <NavLink
          onClick={() => moveTo("/")}
          isActive={isActive("/".toString())}
        >
          프로필
        </NavLink>
        <NavLink>나의 쇼핑</NavLink>
        <NavLink>나의 리뷰</NavLink>
        <NavLink
          onClick={() => moveTo("/editProfile")}
          isActive={isActive("/editProfile".toString())}
        >
          설정
        </NavLink>
      </MenuRow>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
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
  cursor: pointer;
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
const NavLink = styled.a`
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#35c5f0" : "black")};
`;
export default Layout;
