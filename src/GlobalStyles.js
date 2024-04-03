import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

  /* PADDING / MARGIN */
  --gap-xs: 10px;
  --gap-s: 20px;
  --gap-m: 34px;
  --gap-l: 74px;
  --gap-xl: 108px;

  /* SMALL SIZES */

  --pad-xs: 2px;
  --pad-s: 4px;
  --pad-m: 8px;
  --pad-l: 12px;
  --pad-xl: 16px;
  --pad-xxl: 20px;

  /* SIZES */
  --size-s: 228px;
  --size-m: 260px;
  --size-l: 400px;
  --size-xl: 500px;
  --size-xxl: 600px;

  /* ICONS SIZE */
  --icon-m: 100px;

  /* FONT SIZES */
  --fs-xs: 12px;
  --fs-s: 20px;
  --fs-m: 24px;
  --fs-l: 40px;
  --fs-xl: 120px;

  /* BLOCKS */

  --block-xs: 480px;
  --block-s: 600px;
  --block-m: 800px;
  --block-l: 1200px;
  --block-xl: 1500px;
}

*, html {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "arial";
  font-size: var(--fs-m);
}

a {
    text-decoration: none;
    color: black;

  }
p {
  margin: var(--gap-xs) 0;


}


`;

export default GlobalStyles;
