"use client";
// import client from '@/graphql/apolloClient'
import client from '@/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'

const ApolloProviderWraper=({children}:{children:React.ReactNode})=>{
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}

export default ApolloProviderWraper;