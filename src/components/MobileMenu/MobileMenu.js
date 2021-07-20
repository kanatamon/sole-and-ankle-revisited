/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import { QUERIES, COLORS, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <ResponsiveDialogOverlay>
      <StyledDialogContent aria-label='Menu'>
        <StyledIcon id='close' onClick={onDismiss} />
        <Nav>
          <a href='/sale'>Sale</a>
          <a href='/new'>New&nbsp;Releases</a>
          <a href='/men'>Men</a>
          <a href='/women'>Women</a>
          <a href='/kids'>Kids</a>
          <a href='/collections'>Collections</a>
        </Nav>
        <Footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </Footer>
      </StyledDialogContent>
    </ResponsiveDialogOverlay>
  )
}

const ResponsiveDialogOverlay = styled(DialogOverlay)`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`

const StyledDialogContent = styled(DialogContent)`
  margin: 0;
  margin-left: auto;
  height: 100%;
  width: 300px;
  padding: 26px 16px 32px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    font-size: 1.125rem;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
  }
`

export default MobileMenu
