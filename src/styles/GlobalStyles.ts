import { css } from '@emotion/react';
import 'modern-normalize';
import dmSansRegular from '../fonts/DMSans-Regular.woff';
import dmSansRegularSecond from '../fonts/DMSans-Regular.woff2';
import dmSansMedium from '../fonts/DMSans-Medium.woff';
import dmSansMediumSecond from '../fonts/DMSans-Medium.woff2';
import dmSansBold from '../fonts/DMSans-Bold.woff';
import dmSansBoldSecond from '../fonts/DMSans-Bold.woff2';
import playfairDisplayRegular from '../fonts/PlayfairDisplay-Regular.woff';
import playfairDisplayRegularSecond from '../fonts/PlayfairDisplay-Regular.woff2';
import playfairDisplayMedium from '../fonts/Playfair Display Medium.woff';
import playfairDisplayMediumSecond from '../fonts/Playfair Display Medium.woff2';
import playfairDisplayBold from '../fonts/PlayfairDisplay-Bold.woff';
import playfairDisplayBoldSecond from '../fonts/PlayfairDisplay-Bold.woff2';
import playfairDisplaySemiBold from '../fonts/PlayfairDisplay-SemiBold.ttf';
import playfairDisplaySCBold from '../fonts/PlayfairDisplaySC-Bold.woff';
import playfairDisplaySCBoldSecond from '../fonts/PlayfairDisplaySC-Bold.woff2';
import interRegular from '../fonts/Inter-Regular.woff';
import interRegularSecond from '../fonts/Inter-Regular.woff2';
import interSemiBold from '../fonts/Inter-SemiBold.woff';
import interSemiBoldSecond from '../fonts/Inter-SemiBold.woff2';
import quicksandMedium from '../fonts/Quicksand-Medium.woff';
import quicksandMediumSecond from '../fonts/Quicksand-Medium.woff2';
import sourceSerifProRegular from '../fonts/SourceSerifPro-Regular.woff';
import sourceSerifProRegularSecond from '../fonts/SourceSerifPro-Regular.woff2';
import sourceSerifProSemiBold from '../fonts/SourceSerifPro-SemiboldIt.woff';
import sourceSerifProSemiBoldSecond from '../fonts/SourceSerifPro-SemiboldIt.woff2';
import spaceGroteskMedium from '../fonts/SpaceGrotesk-Medium.woff';
import spaceGroteskMediumSecond from '../fonts/SpaceGrotesk-Medium.woff2';
import urbanistRegular from '../fonts/Urbanist-Regular.woff';
import urbanistRegularSecond from '../fonts/Urbanist-Regular.woff2';

export const globalStyles = css`
  body {
    overflow: auto;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    display: block;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansRegular}), url(${dmSansRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansMedium}), url(${dmSansMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${dmSansBold}), url(${dmSansBoldSecond});
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${playfairDisplayRegular}), url(${playfairDisplayRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${playfairDisplayMedium}), url(${playfairDisplayMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${playfairDisplaySemiBold});
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${playfairDisplayBold}), url(${playfairDisplayBoldSecond});
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display SC';
    src: url(${playfairDisplaySCBold}), url(${playfairDisplaySCBoldSecond});
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interRegular}), url(${interRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${interSemiBold}), url(${interSemiBoldSecond});
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url(${quicksandMedium}), url(${quicksandMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: url(${sourceSerifProRegular}), url(${sourceSerifProRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Serif Pro';
    src: url(${sourceSerifProSemiBold}), url(${sourceSerifProSemiBoldSecond});
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${spaceGroteskMedium}), url(${spaceGroteskMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Urbanist';
    src: url(${urbanistRegular}), url(${urbanistRegularSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }
`;
