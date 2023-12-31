import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <Link to="/#about" style={{ textDecoration: 'none'}}><NavLink > About</NavLink></Link> 
          <Link to="/#skills" style={{ textDecoration: 'none'}}><NavLink > Skills</NavLink></Link> 
          <Link to="/#experience" style={{ textDecoration: 'none'}}><NavLink > Experience</NavLink></Link> 
          <Link to="/#projects" style={{ textDecoration: 'none'}}><NavLink > Projects</NavLink></Link> 
          <Link to="/#education" style={{ textDecoration: 'none'}}><NavLink > Education</NavLink></Link> 

          {/* <NavLink href='/#skills'>Skills</NavLink>
          <NavLink href='/#experience'>Experience</NavLink>
          <NavLink href='/#projects'>Projects</NavLink>
          <NavLink href='/#education'>Education</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <Link to="/#about" style={{ textDecoration: 'none'}}><MobileLink  onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink></Link>
            <Link to="/#skills" style={{ textDecoration: 'none'}}><MobileLink  onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink></Link>
            <Link to="/#experience" style={{ textDecoration: 'none'}}><MobileLink  onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink></Link>
            <Link to="/#projects" style={{ textDecoration: 'none'}}><MobileLink  onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink></Link>
            <Link to="/#education" style={{ textDecoration: 'none'}}><MobileLink  onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink></Link>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar