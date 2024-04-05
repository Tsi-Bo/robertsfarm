import styled from "styled-components";

const StyledAboutText = styled.div`
  margin: var(--size-s) auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
  text-align: center;
`;

function AboutText() {
  return (
    <StyledAboutText>
      <div>LOGO</div>
      <h2>ABOUT THE FARM</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae quod
        illum corrupti sapiente provident molestiae rerum magni vel ea
        dignissimos numquam tempore obcaecati ducimus debitis inventore
        excepturi, possimus reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae quod
        illum corrupti sapiente provident molestiae rerum magni vel ea
        dignissimos numquam tempore obcaecati ducimus debitis inventore
        excepturi, possimus reiciendis.
      </p>
    </StyledAboutText>
  );
}

export default AboutText;
