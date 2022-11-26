import Context from '../components/context/context'
import Layout from '../layouts/layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Layout>
    <Context>
      <Component {...pageProps} />
    </Context>
  </Layout>


}

export default MyApp
