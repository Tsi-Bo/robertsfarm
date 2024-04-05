/* eslint-disable react/prop-types */
import { useState } from "react";
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

  &:disabled {
    background-color: #ccc; /* Change background color */
    color: #666; /* Change text color */
    cursor: not-allowed; /* Change cursor */
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Feedback({ data }) {
  const [currIndex, setCurrIndex] = useState(0);

  const nextDisabled = currIndex >= data.length - 1;
  const prevDisabled = currIndex <= 0;

  function nextTestimony() {
    if (!nextDisabled) {
      setCurrIndex((prevIndex) => prevIndex + 1);
    }
  }

  function prevTestimony() {
    if (!prevDisabled) {
      setCurrIndex((prevIndex) => prevIndex - 1);
    }
  }

  const currTestimony = data[currIndex];

  return (
    <StyledFeedback>
      <div>LOGO</div>
      <h2>{currTestimony.title}</h2>
      <p>{currTestimony.text}</p>
      <p>{currTestimony.author}</p>

      <div>
        <StyledButton disabled={prevDisabled} onClick={prevTestimony}>
          Previous
        </StyledButton>

        <StyledButton disabled={nextDisabled} onClick={nextTestimony}>
          Next
        </StyledButton>
      </div>
    </StyledFeedback>
  );
}

export default Feedback;
