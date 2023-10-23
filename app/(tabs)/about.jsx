import { React } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CustomComponent from '../../components/customTextView/customTextView';
import styles from '../../components/about/about.style';

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

export default about;