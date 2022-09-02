import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

//<MoralisProvider initializeOnMount={false}>
//<MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
/*
 * Ya no necesitare esto ya que lo voy a inicializar con mi Apollo Provider y GraphQl
 * const APP_ID = process.env.NEXT_PUBLIC_APP_ID
 * const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
 * Tengo que importar
 * import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
 * NEXT_PUBLIC_SUBGRAPH_URI lo tomo de mi dashboard -> details -> DEVELOPMENT QUERY URL
 * y hago lo siguiente:
 */

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
})
/*
 * Luego dentro de mi MoralisProvider pero afuera de mi NotificationProvider coloco los tags
 * de ApolloProvider
 */

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
