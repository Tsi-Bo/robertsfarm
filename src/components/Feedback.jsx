import styled from "styled-components";

const StyledFeedback = styled.div`
  width: 60%;
  margin: var(--gap-xl) auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--gap-m) var(--gap-l);
  text-align: center;
`;

const StyledButton = styled.button`
  font-size: var(--fs-s);
  border: none;
  border-radius: 5px;
  padding: var(--gap-xs);
  margin: var(--gap-s);
  transition: all 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Feedback() {
  return (
    <StyledFeedback>
      <div>LOGO</div>
      <h2>WHAT OUR CLIENTS SAY</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa
        odit adipisci tempora, eius quibusdam, soluta deserunt illo accusantium
        impedit eligendi animi? Harum quibusdam cupiditate dolore, impedit
        officia officiis dolores.
      </p>
      <p>Big Joe, La Légende</p>
      <div>
        <StyledButton>Previous</StyledButton>
        <StyledButton>Next</StyledButton>
      </div>
    </StyledFeedback>
  );
}

export default Feedback;
