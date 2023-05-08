import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'



const HamburgerMenu = () => {
    
  return (
    
    <Menu>
        {({ isOpen }) => (
            <>
            <MenuButton
                isActive={isOpen}
                as={Button}
                fontSize='1.7rem'
                h='50px'
            >
                {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </MenuButton>
            <MenuList w="100vw" mt='2'>
                <MenuItem>Page 1</MenuItem>
                <MenuItem>Page 2</MenuItem>
            </MenuList>
            </>
        )}
    </Menu>
  )
}

export default HamburgerMenu
