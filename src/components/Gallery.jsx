import { useEffect, useState } from "react";
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
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };
    // Importing images dynamically using require.context
    const imagesArray = importAll(
      require.context("./gallery", false, /\.(png|jpe?g|svg)$/)
    );

    setImages(imagesArray);
  }, []);

  return (
    <StyledGallery>
      <StyledGalleryContainer>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <img src={image} alt={`img-${index}`} />
          </GalleryItem>
        ))}
      </StyledGalleryContainer>
    </StyledGallery>
  );
}

export default Gallery;
