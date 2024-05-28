import styled from '@emotion/styled';
import { InputProps } from 'src/components/inputField/types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 335px;
  height: 72px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #000; /* Adjust based on design */
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
  border: solid;
  border-color: ${props => (props.hasError ? 'red' : '#ccc')};
  outline: none;

  &:focus {
    border-color: #000;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
`;
