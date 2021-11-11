
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Embed
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text >
    <Header
      as='h1'
      content='Terceirize seu Delivery.'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: '0.5em',
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <h2>(11) 5574-0808<br/>
 (11) 95868-8931</h2>

    <Button primary size='huge'>
      Entre em contato 
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: true })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em',background: 'url(banner.png)', backgroundSize: 'cover'}}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' >
                  <Image style={{width: '80px'}} src='logo.png' />
                </Menu.Item>
                <Menu.Item as='a'>Serviços</Menu.Item>
                <Menu.Item as='a'>Empresa</Menu.Item>
                <Menu.Item as='a'>Preços</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Entrar
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Cadastro
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              <Image size='small' src='logo.png' />
            </Menu.Item>
            <Menu.Item as='a'>Serviços</Menu.Item>
            <Menu.Item as='a'>Empresa</Menu.Item>
            <Menu.Item as='a'>Preços</Menu.Item>
            <Menu.Item as='a'>App</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider  >
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Terceirize seu Delivery.
                Atendemos todo o estado de São Paulo
            </Header>
            <p style={{ fontSize: '1.33em' }}>


Terceirizamos motoboys fixos para delivery,  garantia reposição,  motoboy reserva, moto extra em dias de maior movimento e tudo isso com rastreio e acompanhamento em tempo real.
<br/>
Gostaria de orçamento sem compromisso ?
            </p>
            <Button as='a' size='large'>
          Entre em contato
        </Button>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='medium' src='jaq.png' />
          </Grid.Column>
        </Grid.Row>
     
      </Grid>
    </Segment>

 
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>


        <Image style={{ width: '100%' }} src='cartaz.jpeg' />
      </Container>
    </Segment>


    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>


        <Header as='h3' style={{ fontSize: '2em' }}>
          TSD Motoboys
        </Header>
        <div>
          <Embed
            id='kCavAumsN3w'
            
            source='youtube'
          />
          
        </div>
        <Button as='a' size='large'>
          Entre em contato
        </Button>
      </Container>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>


        <Header as='h3' style={{ fontSize: '2em' }}>
          MODELOS DE ENTREGA
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade.
        </p>
        <Button as='a' size='large'>
          Entre em contato
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Serviços</List.Item>
                <List.Item as='a'>Empresa</List.Item>
                <List.Item as='a'>Preços</List.Item>
                <List.Item as='a'>Contato</List.Item>
              </List>
            </Grid.Column>
    
            <Grid.Column width={8}>
              <Header as='h4' inverted>
                TSD
              </Header>
              <p>
                Terceirize os motoboys de seu delivery e dê qualidade aos seus serviços de entregas.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout