import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { useQuery, gql } from '@apollo/client'
import styles from './countryCard.style';

const router = useRouter();

const GET_COUNTRIES = gql `
    query GetCountries{
        countries(filter: { currency: { eq: "EUR" } }) {
            code
            name
            capital
            emoji
            currency
        }
    }
`
const DisplayCountries = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error : {error.message}</Text>;
    return data.countries.map((country) => (
    <TouchableOpacity key={country.code} onPress={() => router.push({ pathname: `/country/${country.code}`})}>
        <View style={styles.card}>
            <View style={styles.leftContent}>
                <Text style={styles.emoji}>{country.emoji}</Text>
            </View>
            <View style={styles.rightContent}>
                <Text style={styles.text}>Country name: {country.name}</Text>
                <Text style={styles.text}>The capital: {country.capital}</Text>
                <Text style={styles.text}>The currency: {country.currency}</Text>
            </View>
        </View>
    </TouchableOpacity> 
    ));
  }

  export default DisplayCountries;