import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

function HomePage() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>Profile Menu</GridItem>
      </Show>
      <GridItem area='main'>Main</GridItem>
    </Grid>

  )
}

export default HomePage