import styled from "styled-components";
import Button from "./Button";
import heroBackground from "../gallery/image4-min.jpeg";

const StyledHero = styled.div`
  background-image: url(${heroBackground});

  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--ivory);

  margin-bottom: var(--gap-l);
  margin-bottom: var(--gap-s);
  margin-top: 0;

  p {
    font-size: var(--fs-m);
    margin-bottom: var(--gap-xs);
  }

  hr {
    width: 50%;
    border: 1px solid var(--ivory);
    margin: 0;
    padding: 0;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <p>— Since 1912 —</p>
      <hr />
      <h1>{` ROBERT'S FARM`}</h1>
      <hr />
      <p>CERTIFIED ORGANIC / LOCALLY GROWN / HANDPICKED</p>
      <Button>HELLO</Button>
    </StyledHero>
  );
}

export default Hero;
