import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'
import { ConnectButton, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import Header from '@/components/Header'
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Tools on chain',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions>
        <ChakraProvider theme={theme}>
          <Header></Header>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
