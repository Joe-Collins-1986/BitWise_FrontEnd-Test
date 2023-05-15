import { Grid, GridItem, Show } from '@chakra-ui/react'

function LoginPage() {

  return (
    <Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}>
      <Show above='lg'>
        <GridItem area='aside'>Login Profile Menu</GridItem>
      </Show>
      <GridItem area='main'>Login Main</GridItem>
    </Grid>

  )
}

export default LoginPage
