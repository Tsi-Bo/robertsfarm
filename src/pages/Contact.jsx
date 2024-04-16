import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import contactImage from "../gallery/farm-contact.jpg";

const StyledContact = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  /* mask-image: linear-gradient(to bottom, transparent, black 50%);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 50%); */
`;

function Contact() {
  return (
    <StyledContact>
      <StyledImage src={contactImage} />
      <ContactForm />
    </StyledContact>
  );
}

export default Contact;
