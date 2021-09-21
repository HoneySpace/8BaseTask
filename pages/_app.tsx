import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { FilterContextProvider } from '../context/filter'

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
      <FilterContextProvider>
        <Component {...pageProps} />
        <div id="modalPortal" className="absolute z-index-10 h-screen w-full top-0 pointer-events-none">
        </div>
      </FilterContextProvider>
    </ApolloProvider>
  )
}
export default MyApp
