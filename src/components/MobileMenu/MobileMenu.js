/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES, COLORS, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: hsla(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background: var(--color-white);
  width: 300px;
  height: 100%;
  padding: 26px 16px 32px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 6px;
  padding: 10px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  font-size: 1.125rem;
`

const Filler = styled.div`
  flex: 1;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`

export default MobileMenu
