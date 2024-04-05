import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledContactForm = styled.div`
  background-color: lightgreen;

  margin: 0 auto;
  width: 100%;
  h2,
  button {
    text-align: center;
    margin-bottom: var(--gap-s);
  }
`;

const StyledButton = styled(Button)``;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="tel"]:focus,
  textarea:focus {
    outline: none; /* Remove default focus outline */
    border-color: black; /* Change border color */
  }

  textarea {
    height: 150px;
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    setFormData({
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      message: "",
    });
    console.log(formData);
  };
  return (
    <StyledContactForm>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="telephone">Telephone Number</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </StyledFormGroup>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </StyledContactForm>
  );
}

export default ContactForm;
