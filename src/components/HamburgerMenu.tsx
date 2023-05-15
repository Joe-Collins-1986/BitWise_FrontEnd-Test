import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'



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
            <MenuList w="100vw" mt='2' className='nav'>
                <NavLink to="/"><MenuItem>Home</MenuItem></NavLink>
                <NavLink to="/login/"><MenuItem>Login</MenuItem></NavLink>
                <NavLink to="/signup/"><MenuItem>Sign Up</MenuItem></NavLink>
            </MenuList>
            </>
        )}
    </Menu>
  )
}

export default HamburgerMenu
