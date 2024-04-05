/* eslint-disable react/prop-types */

import { useState } from "react";
import styled from "styled-components";

const StyledAccordion = styled.div`
  width: 80%;
  margin: var(--gap-l) auto;
  background-color: lightgray;
  min-width: var(--block-s);
`;

const StyledAccordionItem = styled.div`
  background-color: lightcyan;
  margin: var(--gap-s) auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--gap-s) var(--gap-m);
`;

const AccordionItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--gap-m);
`;

function Accordion({ data }) {
  return (
    <StyledAccordion>
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </StyledAccordion>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <StyledAccordionItem onClick={handleToggle}>
      <AccordionItemContainer>
        <p>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p>{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </AccordionItemContainer>

      {isOpen && <div>{text}</div>}
    </StyledAccordionItem>
  );
}

export default Accordion;
