import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';
import { Link } from 'react-router-dom';
import { Section } from 'src/components/section';
import bgImg from '../../assets/images/sign-up.png';

export const SignUpSection = styled(Section)<{ theme?: Theme }>`
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
    width: 60%;
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

export const PolicyLink = styled(Link)<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SignUpFormWrap = styled.div<{ theme?: Theme }>`
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
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
