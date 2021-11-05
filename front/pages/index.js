import Layout from './components/layout'
import Sidebar from './components/sidebar'
import FormUp from './components/form'
import { Message, Statistic, Grid, Card, Button,Segment,  Container } from 'semantic-ui-react'
import { useState } from 'react'

export default function Index() {
const [ EmpNum, setEmpNum] = useState(0)
const [ RegNum, setRegNum] = useState(0)
const [ UpNum, setUpNum] = useState(0)



return (
<Container text>
  <br/>
  <Message>
    <Message.Header>Volte mais tarde</Message.Header>
    <p>
Página em construção    </p>
  </Message>

  <Segment.Group> 
    <Segment>  
      <Grid centered columns={1} container divided stackable>
        <Grid.Column>  
          <Container fluid> 
           
            <h2>TSD Motoboys</h2>
            <p>
              Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade.
            </p>
            
          </Container>
        </Grid.Column>
   
      </Grid>
    </Segment>
        

    <Segment>
      <small>Dev: Daniel Batista Galvão</small>
    </Segment>

  </Segment.Group>
</Container>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
