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
    <Message.Header>Processador de arquivo CNAB</Message.Header>
    <p>
      Teste solicitado pela empresa <b>byCoders</b>.
    </p>
  </Message>

  <Segment.Group> 
    <Segment>  
      <Grid centered columns={2} container divided stackable>
        <Grid.Column>   
          <b>byCoders</b>
          <h2>CNAB</h2>
          <p>
            O CNAB (Centro Nacional de Automação Bancária) é, basicamente, uma espécie de software capaz de manter uma interface de informaçōes digitais entre os bancos e seus clientes, seguindo alguns padrōes definidos pela Febraban (Federação Brasileira de Bancos).
          </p>
          <h2>O arquivo</h2>
          <p>
            O objetivo destes arquivos é intercambiar informações digitalmente entre o sistema de informática do banco e o do cliente. Dentre as informações podemos citar: cobrança (boletos bancários, pagamentos, extrato (para conciliação), débito em conta, vendor e custódia de cheques). Cada um destes produtos tem seu fluxo de informação e portanto um layout.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>Envio de Arquivo</Card.Header>
              <Card.Description>
                <FormUp/>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
        
    <Segment>      
      <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value>{EmpNum}</Statistic.Value>
          <Statistic.Label>Empresas</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{RegNum}</Statistic.Value>
          <Statistic.Label>Registros</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{UpNum}</Statistic.Value>
          <Statistic.Label>Uploads</Statistic.Label>
        </Statistic>
      </Statistic.Group>
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
