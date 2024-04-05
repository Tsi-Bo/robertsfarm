import styled from "styled-components";
import Container from "../components/Container";
import ContainerItem from "../components/ContainerItem";
import ContactForm from "../components/ContactForm";

const StyledContact = styled.div`
  margin: var(--gap-l) 0;
`;

function Contact() {
  return (
    <StyledContact>
      <Container>
        <ContainerItem>image</ContainerItem>
        <ContainerItem>
          <ContactForm />
        </ContainerItem>
      </Container>
    </StyledContact>
  );
}

export default Contact;
