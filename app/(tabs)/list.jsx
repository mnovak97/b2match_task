import { React } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useQuery, gql } from '@apollo/client'
import { ScrollView } from 'react-native-gesture-handler'

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
function DisplayCountries() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error : {error.message}</Text>;
    return data.countries.map((country) => (
    <TouchableOpacity onPress={() => router.push({ pathname: `/country/${country.code}`})}>
        <View key={country.code} style={styles.card}>
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

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: 15,
      margin: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    leftContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightContent: {
      flex: 3,
      justifyContent: 'center',
    },
    emoji: {
      fontSize: 30,
    },
    text: {
      fontSize: 16,
    },
  });
const list = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <DisplayCountries/>
        </ScrollView>
    )
}

export default list;