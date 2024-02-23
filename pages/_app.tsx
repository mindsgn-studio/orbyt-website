import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme"
import posthog from "posthog-js"
import { CSPostHogProvider } from '../src/context/postHog'

if (typeof window !== 'undefined') { 
  posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG_KEY}` , {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <CSPostHogProvider>
        <Component {...pageProps} />
      </CSPostHogProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
