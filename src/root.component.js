import styled from "@emotion/styled";
import { Link, BrowserRouter, useLocation } from "react-router-dom";

const MenuWrapper = styled.nav`
  height: 100vh;
  background-color: hsl(0, 0%, 20%);
  width: 200px;

  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(({ active, ...rest }) => <Link {...rest} />)`
  color: ${({ active }) => (active ? "black" : "white")};
  font-size: 2rem;
  padding: 2rem 0 2rem 1rem;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    background-color: hsl(0, 0%, 30%);
  }

  background-color: ${({ active }) => (active ? "hsl(0, 0%, 80%)" : "inherit")};
`;

const Menu = () => {
  const location = useLocation();

  return (
    <MenuWrapper>
      <MenuItem to="/people" active={location.pathname === "/people"}>
        People
      </MenuItem>
      <MenuItem to="/dogs" active={location.pathname === "/dogs"}>
        Dogs
      </MenuItem>
      <MenuItem to="/cats" active={location.pathname === "/cats"}>
        Cats
      </MenuItem>
    </MenuWrapper>
  );
};

export default () => {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
};
