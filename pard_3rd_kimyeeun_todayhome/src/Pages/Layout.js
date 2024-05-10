import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  const activeStyle = {
    color: "#35c5f0",
    textDecoration: "none",
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div>
      <Header>
        <HamImg src={process.env.PUBLIC_URL + "/Hamburger.svg"} />
        <First>
          <Img src={process.env.PUBLIC_URL + "/Header_1.svg"} />
          <Menus>
            <Menu>커뮤니티</Menu>
            <Menu>쇼핑</Menu>
            <Menu>인테리어/생활</Menu>
          </Menus>
        </First>
        <SearchBar>
          <img alt="검색 아이콘" src={process.env.PUBLIC_URL + "/search.svg"} />
          <Search type="text" placeholder="통합검색" />
        </SearchBar>
        <Second>
          <Icons>
            <Icon
              src={process.env.PUBLIC_URL + "/Search_Black.svg"}
              marginRight={18}
            />
            <Icon
              src={process.env.PUBLIC_URL + "/scrap.svg"}
              marginRight={21}
            />
            <Icon
              src={process.env.PUBLIC_URL + "/alert.svg"}
              marginRight={18}
            />
            <Icon
              src={process.env.PUBLIC_URL + "/bucket.svg"}
              marginRight={16.5}
            />
            <Icon src={process.env.PUBLIC_URL + "/smallProfileIcon.svg"} />
          </Icons>
          <WriteButton>글쓰기</WriteButton>
        </Second>
      </Header>
      <MenuRow gap={51} fontSize={18}>
        <NavLink
          to={`/profile`}
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        >
          프로필
        </NavLink>
        <NavLink style={defaultStyle}>나의 쇼핑</NavLink>
        <NavLink style={defaultStyle}>나의 리뷰</NavLink>
        <NavLink
          to={`/editProfile`}
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
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
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #eaebef;
  @media (max-width: 767px) {
    justify-content: space-between;
    margin-left: 13px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const HamImg = styled.img`
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
const First = styled.div`
  display: flex;
`;

const Second = styled.div`
  display: flex;
`;
const Img = styled.img`
@media (max-width: 767px) {
  margin-right: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 50px;
  }

  @media (min-width: 1024px) {
    margin-right: 50px;
  }

`;
const Menus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
`;

const Menu = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.78px;
  text-align: center;
  white-space: nowrap;
  /* @media (max-width: 767px) {
    min-width: 70px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  } */
`;

const SearchBar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) {
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
  }
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
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) {
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;

  //검정색 검색 아이콘
  :first-child {
    @media (max-width: 767px) {
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
  //북마크 아이콘
  :nth-child(2) {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
    }

    @media (min-width: 1024px) {
    }
  }
  //
  :nth-child(3) {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
    }

    @media (min-width: 1024px) {
    }
  }

  :nth-child(5) {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
    }

    @media (min-width: 1024px) {
    }
  }
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
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
  white-space: nowrap;
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
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

  :nth-child(3){
    @media (max-width: 767px) {
    display: none;
  }
  }
`;

export default Layout;
