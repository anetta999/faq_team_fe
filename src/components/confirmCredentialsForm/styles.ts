import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';
import { Button } from '../button';

export const StyledForm = styled.form<{ theme?: Theme }>`
  min-width: 335px;
  margin-bottom: 32px;

  div {
    height: 80px;
    margin-bottom: 20px;

    label {
      margin-bottom: 8px;
      font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: ${({ theme }) => theme.fontSize.sm};
      line-height: 1.43;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.black};
    }

    input {
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 6px;
      padding: 12px 16px;
      width: 100%;
      height: 44px;
      outline: none;

      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 1.25;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.gray};
      transition: border-color ${({ theme }) => theme.transition.main};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.black};
      }
    }

    .error-input {
      border: 1px solid ${({ theme }) => theme.colors.error_red};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error_red};
        color: ${({ theme }) => theme.colors.error_red};
      }
    }
  }
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
  padding: 16px 141px;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyish_red};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.p<{ theme?: Theme }>`
  height: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.error_red};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.error_tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.error_red};
  }
`;
