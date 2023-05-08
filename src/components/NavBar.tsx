import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logoPlaceholder.jpeg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='50px' margin='5px' />
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar
