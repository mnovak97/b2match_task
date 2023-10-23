import { React } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import DisplayCountries from '../../components/countryCard/countryCard';

const list = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <DisplayCountries/>
        </ScrollView>
    )
}

export default list;