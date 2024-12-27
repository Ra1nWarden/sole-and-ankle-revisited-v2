import React from 'react';
import styled from 'styled-components';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
        <MobileHeader>
          <Icon id="shopping-bag" strokeWidth={1} />
          <Icon id="search" strokeWidth={1} />
          <Icon id="menu" strokeWidth={1} onClick={() => setShowMobileMenu(true)}/>
        </MobileHeader>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(2rem, 2vw + 1rem, 3rem);
  margin: 0px 48px;
  scroll: auto;

  @media ${QUERIES.laptopAndBelow} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;
  
  @media ${QUERIES.laptopAndBelow} {
    display: flex;
    justify-content: end;
    gap: 32px;
  }

  @media ${QUERIES.tabletAndBelow} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
