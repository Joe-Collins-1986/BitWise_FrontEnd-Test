import { HStack, Image, Show, Text, } from '@chakra-ui/react'
import logo from '../assets/logoPlaceholder.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import HamburgerMenu from './HamburgerMenu'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='50px' m='5px' />
        <HStack>
          <Show above='lg'>
            <Text px='20px'>Page 1</Text>
            <Text px='20px'>Page 2</Text>
            <Text px='20px'>Page 3</Text>
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
