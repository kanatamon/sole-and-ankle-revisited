import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/Yolowwwwwwww'>Yolowwwwwwww</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <Icon id='shopping-bag' />
          <Icon id='search' />
          <Icon id='menu' onClick={() => setShowMobileMenu(true)} />
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tabletAndDown} {
    padding: 20px 16px;
    align-items: center;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 3.7vw - 1rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 16px;
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

export default Header
