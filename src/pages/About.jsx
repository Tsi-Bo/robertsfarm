import styled from "styled-components";
import Container from "../components/Container";
import ContainerItem from "../components/ContainerItem";
import AboutText from "../components/AboutText";
import imageAbout1 from "../gallery/old-about.jpg";
import imageAbout2 from "../gallery/recent-about.jpg";

const StyledAbout = styled.div`
  margin: var(--gap-l) 0;
`;

const StyledImageAbout = styled.img`
  width: 50%;
  height: auto;
`;

function About() {
  return (
    <StyledAbout>
      <Container>
        <ContainerItem>
          <h2>OUR STORY</h2>
          <p>4rth generation Family Farm</p>
          <p>
            Nestled in the heart of Quebec, our farm stands as a testament to
            four generations of unwavering dedication to the land. Established
            with humble beginnings, we have grown into a beacon of traditional
            farming practices, rooted in respect for nature and the generations
            that came before us. Our journey began with a vision to cultivate
            the land sustainably, to nurture our animals with care, and to share
            the bounty of our harvest with our community. Today, as we look back
            on our heritage, we take pride in upholding the values of integrity,
            authenticity, and stewardship that have defined our family for
            decades.
          </p>
        </ContainerItem>
        <StyledImageAbout src={imageAbout1} />
      </Container>

      <AboutText />

      <Container>
        <StyledImageAbout src={imageAbout2} />
        <ContainerItem>
          <h2>OUR FUTURE</h2>
          <p>Sustainable growth</p>
          <p>
            As we look toward the horizon, we see endless possibilities for
            growth and innovation while staying true to our roots. We envision a
            future where our farm continues to serve as a beacon of
            sustainability and a model for responsible agriculture. From
            expanding our regenerative farming practices to nurturing the next
            generation of stewards of the land, we are committed to leaving a
            legacy of abundance and abundance for generations to come. With your
            support, we are excited to embark on this journey together, one
            seed, one hoofprint, at a time. Welcome to our farm – where
            tradition meets tomorrow.
          </p>
        </ContainerItem>
      </Container>
    </StyledAbout>
  );
}

export default About;
