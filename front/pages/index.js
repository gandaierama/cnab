
   
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

    <Button primary size='huge'>
      Get Started
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
              Aqui na TSD possuímos o plano que melhor se encaixa no seu negócio, horários flexíveis para suas demandas de trabalho, ou entregas a parte de acordo com a sua necessidade.
            </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='medium' src='jaq.png' />
          </Grid.Column>
        </Grid.Row>
     
      </Grid>
    </Segment>

 



    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>


        <Header as='h3' style={{ fontSize: '2em' }}>
          Terceirize seu Delivery
        </Header>
        <table id="theTable" style="width: 100%; display: table;" dir="auto" data-paging="false" data-cascade="true" data-filter-min="3" data-paging-size="5" data-useparentwidth="true" data-filter-container="#filterBox" data-filter-connectors="false" data-use-parent-width="false" data-sorting="" data-filtering="" data-filter-filters="[]" data-filter-placeholder="Buscar" data-filter-position="right" data-show-header="true" ng-class="{'empty-table':isEmptyTable}" class="footable table outerBorder footable-1 breakpoint-x-small"><thead><tr class="footable-header"><th class="wixColumns footable-first-visible" style="display: table-cell;">PERIODO</th><th class="wixColumns" style="display: table-cell;">ENTRADA</th><th class="wixColumns" style="display: table-cell;">SAÍDA</th><th class="wixColumns footable-last-visible" style="display: table-cell;">VALOR TOTAL</th></tr></thead><tbody><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">MANHÃ&nbsp;</td><td class="wixColumns" style="display: table-cell;">06:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">12:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 65,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">MANHÃ&nbsp;</td><td class="wixColumns" style="display: table-cell;">07:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">12:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 60,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">MANHÃ&nbsp;</td><td class="wixColumns" style="display: table-cell;">08:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">12:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 55,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">MANHÃ&nbsp;</td><td class="wixColumns" style="display: table-cell;">09:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">12:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 50,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">ALMOÇO&nbsp;</td><td class="wixColumns" style="display: table-cell;">11:30&nbsp;</td><td class="wixColumns" style="display: table-cell;">14:30&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 50,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">ALMOÇO&nbsp;</td><td class="wixColumns" style="display: table-cell;">11:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">15:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 55,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">ALMOÇO&nbsp;</td><td class="wixColumns" style="display: table-cell;">11:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">16:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 60,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">ALMOÇO&nbsp;</td><td class="wixColumns" style="display: table-cell;">11:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">17:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 65,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">NOITE&nbsp;</td><td class="wixColumns" style="display: table-cell;">19:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">22:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 50,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">NOITE&nbsp;</td><td class="wixColumns" style="display: table-cell;">19:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">23:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 55,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">NOITE&nbsp;</td><td class="wixColumns" style="display: table-cell;">18:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">23:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 60,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">NOITE&nbsp;</td><td class="wixColumns" style="display: table-cell;">18:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">00:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 65,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">MADRUGADA&nbsp;</td><td class="wixColumns" style="display: table-cell;">00:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">02:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 50,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">MADRUGADA&nbsp;</td><td class="wixColumns" style="display: table-cell;">23:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">02:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 55,00&nbsp;</td></tr><tr class="footableOdd"><td class="wixColumns footable-first-visible" style="display: table-cell;">MADRUGADA&nbsp;</td><td class="wixColumns" style="display: table-cell;">00:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">04:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 65,00&nbsp;</td></tr><tr class="footableEven"><td class="wixColumns footable-first-visible" style="display: table-cell;">MADRUGADA&nbsp;</td><td class="wixColumns" style="display: table-cell;">23:00&nbsp;</td><td class="wixColumns" style="display: table-cell;">04:00&nbsp;</td><td class="wixColumns footable-last-visible" style="display: table-cell;">R$ 70,00&nbsp;</td></tr></tbody></table>
        <Button as='a' size='large'>
          Terceirize seu Delivery
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