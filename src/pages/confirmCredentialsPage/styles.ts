import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';

export const StyledSection = styled.section<{ theme?: Theme }>`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 120px 0;
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledImgWrapper = styled.div<{ theme?: Theme }>`
  flex: 0 1 60%;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
`;
export const StyledFormContainer = styled.div<{ theme?: Theme }>`
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;

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
export const StyledContainerFluid = styled.div`
  max-width: 100%;
  display: flex;
  gap: 100px;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 70px;
  font-size: 28px;
  font-weight: 700;
  color: #172234;
`;
