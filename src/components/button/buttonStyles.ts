import styled from '@emotion/styled';
import { buttonProps } from './buttonProps';
import { ButtonVariant } from './buttonEnum';

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
  padding: 16px auto;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
`;
