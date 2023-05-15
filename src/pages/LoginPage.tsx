import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

function LoginPage() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>Login Profile Menu</GridItem>
      </Show>
      <GridItem area='main'>Login Main</GridItem>
    </Grid>

  )
}

export default LoginPage
