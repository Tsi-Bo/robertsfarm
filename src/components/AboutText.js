import styled from "styled-components";
import logo from "../gallery/logo.png";

const StyledAboutText = styled.div`
  margin: var(--size-s) auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-s);
  text-align: center;
`;

const StyledLogo = styled.img`
  height: 200px;
  width: 200px;
`;

function AboutText() {
  return (
    <StyledAboutText>
      <StyledLogo src={logo} />
      <h2>OUR COMMUNITY</h2>
      <p>
        Beyond just a farm, we are a vibrant community of like-minded
        individuals who share a passion for wholesome living and sustainable
        agriculture. Whether you are a curious visitor seeking to reconnect with
        the land, a fellow farmer looking to exchange knowledge, or a
        conscientious consumer seeking ethically-produced goods, you will find a
        warm welcome here. We believe in the power of connection – to the land,
        to our animals, and to each other – and strive to foster a sense of
        belonging for all who pass through our gates. Together, we are not just
        building a farm; we are cultivating a movement toward a healthier, more
        harmonious world.
      </p>
      <p>
        At our farm, we believe that true abundance stems from harmony with
        nature. That is why we have committed ourselves to organic farming
        methods that prioritize the health of the soil, the welfare of our
        animals, and the purity of our produce. Every seed we plant, every
        animal we raise, is treated with the utmost respect and care. We reject
        the shortcuts of industrial agriculture in favor of a slower, more
        sustainable approach that honors the rhythms of the seasons and the
        wisdom of generations past. Our philosophy is simple: to work in harmony
        with the land is to reap the richest rewards.
      </p>
    </StyledAboutText>
  );
}

export default AboutText;
