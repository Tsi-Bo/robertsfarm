import styled from "styled-components";
import Button from "./Button";

const StyledHero = styled.div`
  background-image: url("your-background-image.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  margin-bottom: var(--gap-l);
  margin-bottom: var(--gap-s);
  margin-top: var(--gap-s);

  p {
    font-size: var(--fs-m);
    margin-bottom: var(--gap-xs);
  }

  hr {
    width: 50%;
    border: 1px solid white;
    margin: 0;
    padding: 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: var(--gap-l);
`;

function Hero() {
  return (
    <StyledHero>
      <p>— Since 1912 —</p>
      <hr />
      <h1>{` ROBERT'S FARM`}</h1>
      <hr />
      <p>CERTIFIED ORGANIC / LOCALLY GROWN / HANDPICKED</p>
      <StyledButton>HELLO</StyledButton>
    </StyledHero>
  );
}

export default Hero;
