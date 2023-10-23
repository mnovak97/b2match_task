import { View, Text } from 'react-native'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { useQuery, gql} from '@apollo/client';
import styles from './details.style';

const CountryDetails = () => {
    const { id } = useGlobalSearchParams();

    const GET_COUNTRY = gql `
    query GetCountry {
        country(code: "${id}") {
          name
          native
          capital
          emoji
          phone
          awsRegion
          currency
          languages {
            code
            name
          }
        }
      }
    `

    const {loading, data} = useQuery(GET_COUNTRY);
    if (loading) return <Text>Loading...</Text>;
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerTitle: `Details`}} />
            <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>{data.country.emoji}</Text>
            </View>
                <Text style={styles.title}>{data.country.name}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Country name: </Text>
                <Text style={styles.textCountry}>{data.country.name}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Native country name: </Text>
                <Text style={styles.textCountry}>{data.country.native}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Capital: </Text>
                <Text style={styles.textCountry}>{data.country.capital}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Currency: </Text>
                <Text style={styles.textCountry}>{data.country.currency}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Language: </Text>
                {data.country.languages.map((language) => (
                    <Text style={styles.textCountry} key={language.code}>{language.name}</Text>
                ))}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Phone: </Text>
                <Text style={styles.textCountry}>{data.country.phone}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Aws Region: </Text>
                <Text style={styles.textCountry}>{data.country.awsRegion}</Text>
            </View>
        </View>
    )
}

export default CountryDetails;