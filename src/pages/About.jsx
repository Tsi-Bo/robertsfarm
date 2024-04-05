import styled from "styled-components";
import Container from "../components/Container";
import ContainerItem from "../components/ContainerItem";
import AboutText from "../components/AboutText";

const StyledAbout = styled.div`
  margin: var(--gap-l) 0;
`;

function About() {
  return (
    <StyledAbout>
      <Container>
        <ContainerItem>
          <h2>OUR STORY</h2>
          <p>4rth generation Family Farm</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi eos architecto corrupti harum dolores, ab
            obcaecati quibusdam nemo natus quisquam. Dicta voluptates quas
            sapiente suscipit, blanditiis sit sequi minima?
          </p>
        </ContainerItem>
        <ContainerItem>Hello</ContainerItem>
      </Container>

      <AboutText />

      <Container>
        <ContainerItem>Hello</ContainerItem>
        <ContainerItem>
          <h2>OUR STORY</h2>
          <p>4rth generation Family Farm</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi eos architecto corrupti harum dolores, ab
            obcaecati quibusdam nemo natus quisquam. Dicta voluptates quas
            sapiente suscipit, blanditiis sit sequi minima?
          </p>
        </ContainerItem>
      </Container>
    </StyledAbout>
  );
}

export default About;
