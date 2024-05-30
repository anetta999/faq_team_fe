import styled from '@emotion/styled';
import { ButtonVariant, buttonProps } from './types';
import { fontSize } from 'src/constants/font-size.consts';

export const StyledButton = styled.button<buttonProps>`
  background-color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.black
      : props.theme.colors.white};
  color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.black
      : props.theme.colors.white};
  border: 2px solid
    ${props =>
      props.variant === ButtonVariant.Black
        ? props.theme.colors.black
        : props.theme.colors.white};
  padding: 16px;
  font-size: ${fontSize.buttonFontSize};
  cursor: pointer;
  border-radius: 12px;
`;
