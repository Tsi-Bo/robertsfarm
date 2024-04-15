import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "./LoginHeader";
import logo from "../gallery/logo.png";

const StyledHeader = styled.header`
  height: var(--gap-m);
  padding: var(--gap-m) var(--gap-l);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--ivory);
  color: var(--night);

  a {
    transition: all 0.3s;

    &:hover {
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

const StyledLogo = styled.img`
  height: 100px;
  width: 100px;
  transition: all 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Link to="./home">
          <StyledLogo src={logo} />
        </Link>
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
