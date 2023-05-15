import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';

import '../api/axiosDefaults';

const Layout = () => {
  return (
    <>

      <Grid templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}>
          <GridItem area='nav'><NavBar /></GridItem>

          <Show above='lg'>
            <GridItem area='aside'>Sign Up Profile Menu</GridItem>
          </Show>
          <GridItem area='main' p={5}><Outlet /></GridItem>
      </Grid>
    </>
  );
};



export default Layout;