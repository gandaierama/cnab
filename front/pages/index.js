import Layout from './components/layout'
import Sidebar from './components/sidebar'
import FormUp from './components/form'


export default function Index() {


  return (
    <section>
      <div>
      <h2>CNAB - byCoders</h2>
      <p>
        O CNAB (Centro Nacional de Automação Bancária) é, basicamente, uma espécie de software capaz de manter uma interface de informaçōes digitais entre os bancos e seus clientes, seguindo alguns padrōes definidos pela Febraban (Federação Brasileira de Bancos).
      </p>
      </div>
      <div>
        <FormUp/>
      </div>
    </section>
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
