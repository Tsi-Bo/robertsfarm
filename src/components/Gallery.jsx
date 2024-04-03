import styled from "styled-components";

const StyledGallery = styled.div`
  padding: var(--gap-l);

  h1,
  p {
    text-align: center;
  }
`;

const StyledGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--gap-l);
`;

const GalleryItem = styled.div`
  width: 100%; /* Ensure each item takes up full width of its grid cell */
  background-color: lightcoral;

  img {
    width: 100%; /* Make sure images fill their container */
    overflow: cover;
    height: auto; /* Maintain aspect ratio */
    display: block; /* Remove any extra space */
  }
`;

function Gallery() {
  return (
    <StyledGallery>
      <h1>Follow us on social media</h1>
      <StyledGalleryContainer>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
        <GalleryItem>Hello</GalleryItem>
      </StyledGalleryContainer>
      <p>...</p>
    </StyledGallery>
  );
}

export default Gallery;
