import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

const DynamicCustomCursor = dynamic(() => import('../components/CustomCursor'), {
  ssr: false,
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1a1f3c',
        color: '#FFFFFF'
      }
    }
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
  colors: {
    brand: {
      primary: '#3498db',
      secondary: '#1a1f3c',
      accent: '#3498db',
      background: '#1a1f3c',
      card: 'rgba(255, 255, 255, 0.1)',
      text: {
        primary: '#FFFFFF',
        secondary: '#B6B6B6',
      }
    },
    green: {
      400: '#2ecc71',
    },
    yellow: {
      400: '#f1c40f',
    },
    red: {
      400: '#e74c3c',
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        transition: 'all 0.3s ease',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.accent',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
          }
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.text.primary',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        color: 'brand.text.secondary',
      },
    },
    Card: {
      baseStyle: {
        bg: 'brand.card',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  }
})

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          <DynamicCustomCursor />
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default MyApp