import { StyledButton } from './styles';
import { buttonProps } from './types';

export const Button = ({
  variant,
  children,
  ...props
}: React.PropsWithChildren<buttonProps>) => {
  return (
    <StyledButton variant={variant} {...props}>
      {' '}
      {children}{' '}
    </StyledButton>
  );
};
