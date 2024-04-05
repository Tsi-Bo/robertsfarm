/* eslint-disable react/prop-types */
import styled from "styled-components";

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

function Login({ toggleLogin }) {
  return (
    <StyledLogin>
      <div>IMG</div>
      <p>
        This is a demo website <br />
        For more information: <a href="https://github.com/Tsi-Bo">Github</a>
      </p>
      <button onClick={toggleLogin}>Close</button>
    </StyledLogin>
  );
}

export default Login;
