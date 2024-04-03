import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import LoginHeader from "./LoginHeader";

const StyledHeader = styled.header`
  height: var(--gap-m);
  padding: var(--gap-m) var(--gap-l);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightcyan;

  a {
    transition: all 0.3s;

    &:hover {
      color: red;
      letter-spacing: 0.4rem;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--gap-m);
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo>logo</Logo>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <LoginHeader />
      </StyledHeader>
    </>
  );
}

export default Header;
