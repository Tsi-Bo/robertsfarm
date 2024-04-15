import styled from "styled-components";
import { Link } from "react-router-dom";
import meetTheFamilyImage from "../gallery/grand-pere.jpg";

const StyledMeetTheFamily = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-m);
  background-color: var(--yellow);
  margin: var(--gap-l) auto;

  width: 75%;
`;

const MeetTheFamilyContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  padding: var(--gap-m) var(--gap-l);
`;

const StyledMeetTheFamilyImage = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
`;

const StyledButton = styled.button`
  background-color: transparent;
  padding: var(--pad-l);
  font-size: var(--fs-m);
  color: var(--night);
  border: 2px solid var(--night);
  margin-top: var(--gap-l);
  border-radius: 5px;
  transition: all 0.2s;
  opacity: 1;

  &:hover {
    transform: translateY(-5px);
    opacity: 0.5;
  }
`;

const StyledText = styled.div``;

function MeetTheFamily() {
  return (
    <StyledMeetTheFamily>
      <StyledMeetTheFamilyImage src={meetTheFamilyImage} alt="the family" />

      <MeetTheFamilyContainer>
        <p>
          <b>About us</b>
        </p>
        <StyledText>
          Curious about the story behind our farm? Learn more about our rich
          heritage, sustainable practices, and commitment to community on our
          About page. Discover what sets us apart and why visitors keep coming
          back to experience the beauty of traditional farming in Quebec. Join
          us on a journey of authenticity and connection – click here to explore
          our story.
        </StyledText>
        <StyledButton>
          <Link to="/about">Our Story</Link>
        </StyledButton>
      </MeetTheFamilyContainer>
    </StyledMeetTheFamily>
  );
}

export default MeetTheFamily;
