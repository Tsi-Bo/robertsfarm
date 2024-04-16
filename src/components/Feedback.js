/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import logo from "../gallery/logo.png";

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
  background-color: var(--yellow);
  font-size: var(--fs-s);
  border: none;
  border-radius: 5px;
  padding: var(--gap-xs);
  margin: var(--gap-s);
  opacity: 1;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    color: var(--night); /* Change text color */
    cursor: not-allowed; /* Change cursor */
  }

  &:hover {
    background-color: var(--night);
    color: var(--ivory);
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
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
      <StyledLogo src={logo} />
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
