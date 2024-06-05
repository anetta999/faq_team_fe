import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theme';
import { Section } from 'src/components/section';
import bgImg from '../../assets/images/restore-pass.png';

export const RestorePassSection = styled(Section)<{ theme?: Theme }>`
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 34px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 42px;
    padding-bottom: 42px;
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
`;
