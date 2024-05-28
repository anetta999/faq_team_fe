import { buttonProps } from './buttonProps';
import { StyledButton } from './buttonStyles';

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
