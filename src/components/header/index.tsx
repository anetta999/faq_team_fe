import {
  Circle,
  Icon,
  IconBag,
  IconsContainer,
  InnerContainer,
  Logo,
  MenuNav,
  MenuNavItem,
  Nav,
  NavLink,
  StyledHeader,
} from './styles';
import { Container } from '../section/styles';
import logo from 'src/assets/images/logo.png';
import UserIcon from 'src/assets/icons/iconUser';
import BagIcon from 'src/assets/icons/iconBag';
import BellIcon from 'src/assets/icons/iconBell';
import { useAppSelector } from 'src/redux/hooks';
import { Button } from '../button';
import { ButtonVariant } from '../button/types';

export const Header = () => {
  const { token } = useAppSelector(state => state.auth);
  return (
    <StyledHeader>
      <Container>
        <InnerContainer>
          <Logo>
            <img src={logo} />
          </Logo>
          <Nav>
            <MenuNav>
              <MenuNavItem>
                <NavLink to={''}>Shop</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={''}>Vendor</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={''}>Messages</NavLink>
              </MenuNavItem>
            </MenuNav>
          </Nav>
          <IconsContainer>
            {token ? (
              <>
                <Icon>
                  <BellIcon />
                </Icon>
                <Icon>
                  <UserIcon />
                </Icon>
                <IconBag>
                  <BagIcon />
                  <Circle>2</Circle>
                </IconBag>
              </>
            ) : (
              <>
                <Button variant={ButtonVariant.Black}>Sign in</Button>
                <Button variant={ButtonVariant.Black}>Sign up</Button>
                <IconBag>
                  <BagIcon />
                  <Circle>2</Circle>
                </IconBag>
              </>
            )}
          </IconsContainer>
        </InnerContainer>
      </Container>
    </StyledHeader>
  );
};
