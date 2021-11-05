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
      <Grid centered columns={1} >
        <Grid.Column>  
          <Container fluid> 
           
            <h1>TSD Motoboys</h1>
            <p>
              Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade.
            </p>
            
            <hr/>
            <h2>
              Terceirize seu Delivery.<br/>
              Atendemos todo o estado de São Paulo
            </h2>
            <p>
              (11) 5574-0808<br/>
              (11) 95868-8931
            </p>
            <h2>MODELOS DE ENTREGA</h2>
            <p>Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade.</p>
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
