import styled from "styled-components";

const StyledButton = styled.button`
  /* margin-top: var(--gap-l); */
  padding: 10px 20px;
  font-size: var(--fs-m);
  border: 2px solid black;
  border-radius: 5px;
  background-color: transparent; /* Change to your desired button color */
  color: black;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for button hover */

  &:hover {
    letter-spacing: 0.4rem;
  }
`;

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
