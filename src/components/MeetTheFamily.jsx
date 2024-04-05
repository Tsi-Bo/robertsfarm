import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledMeetTheFamily = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-m);
  background-color: lightcoral;
  margin: var(--gap-l) auto;
  padding: var(--gap-m) var(--gap-l);
  width: 75%;
`;

const MeetTheFamilyContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
`;

const StyledButton = styled(Button)`
  margin-top: var(--gap-s);
  color: black;
  border-color: black;
`;

const StyledText = styled.div``;

function MeetTheFamily() {
  return (
    <StyledMeetTheFamily>
      <h1>Meet the family</h1>
      <MeetTheFamilyContainer>
        <p>Fourth generation of family farming</p>
        <StyledText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          reiciendis laboriosam temporibus hic repellat officiis soluta fugiat,
          repudiandae dolorem blanditiis, ab quas. Libero omnis debitis voluptas
          velit blanditiis,
        </StyledText>
        <StyledButton>
          <Link to="/about">Our Story</Link>
        </StyledButton>
      </MeetTheFamilyContainer>
    </StyledMeetTheFamily>
  );
}

export default MeetTheFamily;
