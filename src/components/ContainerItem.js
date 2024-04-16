import styled from "styled-components";

const StyledContainerItem = styled.div`
  flex: 1;

  padding: var(--gap-l) var(--gap-l);

  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line react/prop-types
function ContainerItem({ children }) {
  return <StyledContainerItem>{children}</StyledContainerItem>;
}

export default ContainerItem;
