import { React } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CustomComponent from '../../components/customTextView';

const about = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={require('../../assets/image.jpeg')}/>
            <Text style={styles.textName}>Martin Novak</Text>
            <Text style={styles.textNormal}>Software Developer</Text>
            <CustomComponent imageName="phone" text="0919158566" />
            <CustomComponent imageName="mail" text="mnovak2205@gmail.com" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding:40
    },
    image: {
      width: 150,
      height: 150,
      borderRadius:75,
    },
    textName: {
        fontWeight:'bold',
        fontSize:40,
        padding:10
    },
    textNormal: {
        fontSize:16,
        paddingBottom:50
    }
  });

export default about;