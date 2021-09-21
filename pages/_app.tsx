import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_REACT_APP_API_ENDPOINT_URI,
  cache: new InMemoryCache(),
  headers: {
    "authorization": process.env.NEXT_PUBLIC_REACT_APP_API_TOKEN as string
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider {...{ client }}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
