import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';
import { Section } from 'src/components/section';
import bgImg from '../../assets/images/new-pass.png';

export const NewPassSection = styled(Section)<{ theme?: Theme }>`
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 34px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    height: 100vh;
    padding-bottom: 207px;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      gap: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      gap: 0px;
    }
  }
`;

export const NewPassFormWrap = styled.div<{ theme?: Theme }>`
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: column;
    width: 335px;
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
