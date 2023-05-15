import { HStack, Image, Link, Show, Text, } from '@chakra-ui/react'
import logo from '../assets/logoPlaceholder.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import HamburgerMenu from './HamburgerMenu'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='50px' m='5px' />
        <HStack>
          <Show above='lg'>
            <Link px='20px'>Page 1</Link>
            <Link px='20px'>Page 2</Link>
            <Link px='20px'>Page 3</Link>
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
