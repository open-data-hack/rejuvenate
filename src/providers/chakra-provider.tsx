'use client'
import { ReactNode } from 'react';
import { CacheProvider} from '@chakra-ui/next-js'
import { ChakraProvider as Provider} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
  export const theme = extendTheme({ colors })
export default function ChakraProviders({children}:{children:ReactNode}) {


    return (
        <CacheProvider >

        <Provider theme={theme}>
            {children}
        </Provider>
        </CacheProvider>
    )
}