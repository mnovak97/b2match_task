import { Stack } from 'expo-router'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });

const StackLayout = () => {
    return (
        <ApolloProvider client={client}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
            </Stack>
        </ApolloProvider>
    );
};

export default StackLayout;


