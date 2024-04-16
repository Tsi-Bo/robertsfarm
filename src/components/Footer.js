import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../gallery/logo.png";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: var(--fs-s);
  background-color: var(--yellow);
  color: var(--night);
  a {
    transition: all 0.2s;
    color: var(--night);
    &:hover {
      color: var(--ivory);
    }
  }
`;

const StyledUpperFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--gap-m) var(--gap-l);
`;
const StyledLowerFooter = styled.div`
  font-size: var(--fs-xs);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-s) var(--gap-l);
  background-color: var(--night);
  color: var(--ivory);

  a {
    color: var(--ivory);

    &:hover {
      color: var(--yellow);
    }
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
`;

const InnerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: var(--gap-xs);
`;

const InnerFooterTitle = styled.div`
  margin-bottom: var(--gap-s);
  letter-spacing: 0.4rem;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-s);
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledUpperFooter>
        <InnerFooter>
          <InnerFooterTitle>COORDINATES</InnerFooterTitle>
          <div>1234 3e rue </div>
          <div>Quebec, QC, A1A 1A1</div>
          <div>123-456-7890</div>
          <div>example@email.com</div>
        </InnerFooter>
        <InnerFooter>
          <InnerFooterTitle>MORE</InnerFooterTitle>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/products">Products</Link>
        </InnerFooter>
        <StyledLogo src={logo} />
      </StyledUpperFooter>
      <StyledLowerFooter>
        <div>&copy; {`Robert's Farm — 2024`}</div>
        <IconsContainer>
          <a href="https://github.com/Tsi-Bo">GitHub</a>
          <a href="https://tsi-bo.github.io/Portfolio/">Portfolio</a>
          <a href="https://www.instagram.com/tsibo_fb/">Instagram</a>
          <a href="https://www.linkedin.com/in/thibault-f-bedot-77a7b32a4/">
            Linkedin
          </a>
        </IconsContainer>
      </StyledLowerFooter>
    </StyledFooter>
  );
}

export default Footer;
