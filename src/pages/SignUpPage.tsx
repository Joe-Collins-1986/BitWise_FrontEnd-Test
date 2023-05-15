import { Grid, GridItem, Show } from '@chakra-ui/react'

function SignUpPage() {

  return (
    <Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}>
      <Show above='lg'>
        <GridItem area='aside'>Sign Up Profile Menu</GridItem>
      </Show>
      <GridItem area='main'>Sign Up Main</GridItem>
    </Grid>

  )
}

export default SignUpPage
