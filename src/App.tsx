
import { GridItem, Grid } from "@chakra-ui/react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"

function App() {
  
  return (
    <>
       <Grid templateAreas={`"nav" "main" `}>
          <GridItem  area={'nav'}>
            <Header></Header>
          </GridItem>
          <GridItem  area={'main'}>
             <AddTask></AddTask>
             <ShowTask></ShowTask>
          </GridItem>
       </Grid>
       
       
       
    </>
      
  )
}

export default App
