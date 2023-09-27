'use client'
import { ReactNode } from 'react';
import { CacheProvider} from '@chakra-ui/next-js'
import { ChakraProvider as Provider} from '@chakra-ui/react'

export default function ChakraProviders({children}:{children:ReactNode}) {


    return (
        <CacheProvider>

        <Provider>
            {children}
        </Provider>
        </CacheProvider>
    )
}