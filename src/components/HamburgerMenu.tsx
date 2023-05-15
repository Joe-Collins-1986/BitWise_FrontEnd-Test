import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
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
                UPDATE TO NAVLINK ONCE REACT-ROUTER-DOM IS INSTALLED
                <Link><MenuItem>Page 1</MenuItem></Link>
                <Link><MenuItem>Page 2</MenuItem></Link>
                <Link><MenuItem>Page 3</MenuItem></Link>
            </MenuList>
            </>
        )}
    </Menu>
  )
}

export default HamburgerMenu
