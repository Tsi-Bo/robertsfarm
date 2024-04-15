import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: auto;
  width: 85%;
  background-color: var(--yellow);
`;

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
