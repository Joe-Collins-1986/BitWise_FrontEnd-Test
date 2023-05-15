import { Box, HStack, Image, Show, } from '@chakra-ui/react'
import logo from '../assets/logoPlaceholder.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import HamburgerMenu from './HamburgerMenu'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px' className='nav'>
        <Link to="/">
          <Image src={logo} boxSize='50px' m='5px' />
        </Link>

        <HStack>
          <Show above='lg'>
          <Box px={4}>
            <NavLink to="/" >Home</NavLink>
          </Box>
          <Box px={4}>
            <NavLink to="/login/" >Login</NavLink>
          </Box>
          </Show>
          <ColorModeSwitch />
          <Show below='lg'>
            <HamburgerMenu />
          </Show>
        </HStack>
    </HStack>
  )
}

export default NavBar
