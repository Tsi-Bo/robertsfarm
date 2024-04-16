/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "../gallery/logo.png";

const StyledLogin = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  background-color: var(--yellow);
  padding: var(--gap-l);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: var(--fs-m);
`;
const StyledButton = styled.button`
  background-color: var(--night);
  color: var(--yellow);
  border: 2px solid var(--night);
  padding: var(--pad-l) var(--pad-xl);
  cursor: pointer;
  border-radius: 5px;
  font-size: var(--fs-m);
  outline: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--yellow);
    color: var(--night);
  }
  margin-top: var(--gap-m);
`;

const StyledLogo = styled.img`
  height: 100px;
  width: 100px;
`;

function Login({ toggleLogin }) {
  return (
    <StyledLogin>
      <StyledContainer>
        <StyledLogo src={logo} />
        <p>
          This is a demo website <br />
          For more information: <a href="https://github.com/Tsi-Bo">Github</a>
        </p>
        <StyledButton onClick={toggleLogin}>Close</StyledButton>
      </StyledContainer>
    </StyledLogin>
  );
}

export default Login;
