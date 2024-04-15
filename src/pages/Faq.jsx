import styled from "styled-components";
import Accordion from "../components/Accordion";
import cows from "../gallery/cows.jpg";

const faqs = [
  {
    title: "Where is the farm located?",
    text: "Our farm is nestled in the picturesque countryside of Quebec, surrounded by rolling hills and lush greenery. Located neer the Fleuve Saint Laurent, we invite you to escape the hustle and bustle of city life and immerse yourself in the tranquility of rural Quebec.",
  },
  {
    title: "At what time can we visit the farm?",
    text: "We welcome visitors to our farm during our regular operating hours, which are 9AM to 5PM. Whether you're planning a family outing, a school field trip, or simply craving a peaceful retreat in nature, we're here to accommodate your visit and share our passion for sustainable farming with you.",
  },
  {
    title: "Are children allowed on the farm?",
    text: "Absolutely! We believe that connecting children with nature and teaching them about where their food comes from is essential for fostering a lifelong appreciation for the environment. Our farm is a family-friendly environment where children are not only allowed but encouraged to explore, learn, and engage with the animals and the land.",
  },
  {
    title: "Can we pet the animals on the farm?",
    text: "Yes, we encourage visitors to interact with our animals in a respectful and gentle manner. Many of our animals are accustomed to human contact and enjoy being petted and groomed. However, we do ask that visitors follow our guidelines for animal interaction to ensure the safety and well-being of both our guests and our animals.",
  },
  {
    title: "Do you offer guided tours of the farm?",
    text: "Yes, we offer guided tours of the farm for individuals, families, and groups. Our knowledgeable guides will lead you on an informative and engaging journey through our fields, pastures, and barns, where you'll learn about our farming practices, meet our animals up close, and gain insight into the daily workings of a sustainable farm.",
  },
  {
    title: "Are pets allowed on the farm?",
    text: "For the safety and well-being of our animals and other visitors, we ask that you leave your pets at home when visiting the farm. We have plenty of friendly animals here for you to interact with, but we want to ensure that all interactions are positive and stress-free for everyone involved. Thank you for understanding.",
  },
];

const StyledContainer = styled.div`
  text-align: center;
  width: 50%;
  margin: var(--gap-l) auto;
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;

function Faq() {
  return (
    <>
      <StyledImage src={cows} />
      <StyledContainer>
        <h1>FAQ</h1>
        <p>
          Here is a sample of the most recurrent questions we receive. If you
          have any problem, feel free to contact us.
        </p>
      </StyledContainer>
      <Accordion data={faqs} />;
    </>
  );
}

export default Faq;
