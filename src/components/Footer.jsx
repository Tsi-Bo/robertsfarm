import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: var(--fs-s);
  background-color: lightcoral;
  a {
    transition: all 0.2s;
    &:hover {
      color: grey;
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
          <div>1234 5th Terrence Street </div>
          <div>San Diego, CA 12345</div>
          <div>123-456-7890</div>
          <div>example@email.com</div>
        </InnerFooter>
        <InnerFooter>
          <InnerFooterTitle>MORE</InnerFooterTitle>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/products">Products</Link>{" "}
        </InnerFooter>
        <div>LOGO</div>
      </StyledUpperFooter>
      <StyledLowerFooter>
        <div>&copy; {`Robert's Farm`}</div>
        <IconsContainer>
          <div>GitHub</div>
          <div>Instagram</div>
          <div>LinkedIn</div>
        </IconsContainer>
      </StyledLowerFooter>
    </StyledFooter>
  );
}

export default Footer;
