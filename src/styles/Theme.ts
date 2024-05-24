// const SomeName = styled.div`
//   color: ${({theme}) => theme.colors.black};

// @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
//   color: ${({theme}) => theme.color.black};
// }
// @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
//   color: ${({theme}) => theme.color.black};
// }
//  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
//   color: ${({theme}) => theme.color.black};
//  }

type Color = {
  greyish_red: string;
  pastel_green: string;
  black: string;
  border: string;
  gray: string;
  white: string;
  for_card_bg: string;
  for_tables: string;
  error_red: string;
  error_light_red: string;
  green_success: string;
};

type Breakpoint = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Theme = {
  colors: Color;
  transition: { main: string };
  breakpoint: Breakpoint;
};

export const theme: Theme = {
  colors: {
    greyish_red: '#edeae9',
    pastel_green: '#e3eee2',
    black: '#333',
    border: 'rgba(0, 0, 0, 0.24)',
    gray: '#6d6b6b',
    white: '#fff',
    for_card_bg: 'rgba(237, 234, 233, 0.4)',
    for_tables: 'rgba(237, 234, 233, 0.5)',
    error_red: '#de506f',
    error_light_red: '#ffdfe6',
    green_success: '#36b37e',
  },
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
  },
  breakpoint: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};
