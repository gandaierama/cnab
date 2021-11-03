import Head from 'next/head'
import styles from './layout.module.css'
import { Container,Header } from 'semantic-ui-react'

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>CNAB - byCoders</title>
      </Head>
      <Header as='h3' block>
	    Processador de arquivo CNAB
	  </Header>
      <main className={styles.main}>{children}</main>
    </Container>
  )
}