import styled from "styled-components";
import ContainerItem from "../components/ContainerItem";
import ContactForm from "../components/ContactForm";
import contactImage from "../gallery/farm-contact.jpg";

const StyledContact = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  /* mask-image: linear-gradient(to bottom, transparent, black 50%);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 50%); */
`;

const StyledContactContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: auto;
  width: 85%;
  background-color: var(--yellow);
`;

function Contact() {
  return (
    <StyledContact>
      <StyledImage src={contactImage} />
      <ContactForm />

      {/* <StyledContactContainer>
        <StyledImage src={contactImage} />
        <ContainerItem>
          <ContactForm />
        </ContainerItem>
      </StyledContactContainer> */}
    </StyledContact>
  );
}

export default Contact;
