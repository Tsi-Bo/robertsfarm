import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLoginHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-m);
  font-size: var(--fs-s);
`;

function LoginHeader() {
  return (
    <StyledLoginHeader>
      <Link to="/login">Login</Link>
      <div>Cart</div>
    </StyledLoginHeader>
  );
}

export default LoginHeader;
