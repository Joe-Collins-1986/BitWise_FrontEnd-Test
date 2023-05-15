import { Grid, GridItem, Show } from '@chakra-ui/react'

function HomePage() {

  return (
    <Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}>
      <Show above='lg'>
        <GridItem area='aside'>Profile Menu</GridItem>
      </Show>
      <GridItem area='main'>Main</GridItem>
    </Grid>

  )
}

export default HomePage
