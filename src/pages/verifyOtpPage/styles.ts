import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';

export const StyledEmailVerifyContainer = styled.div<{ theme?: Theme }>`
  height: 100vh;
  display: flex;
`;

export const ImageContainer = styled.div<{ theme?: Theme }>`
  width: 55%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 50%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const FormContainer = styled.div<{ theme?: Theme }>`
  width: 40%;

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 450px;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 250px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
`;

export const VerifyTitle = styled.h1<{ theme?: Theme }>`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.extraLg};
  line-height: 1.32;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const VerifySubTitle = styled.h2<{ theme?: Theme }>`
  max-width: 80%;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;
