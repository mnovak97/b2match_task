import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 1,
    },
    emojiContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    emoji: {
      fontSize: 150,
    },
    textContainer: {
        marginLeft: 20,
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textCountry: {
      fontSize: 16,
      marginBottom: 10,
      color:'gray'
    },
    title: {
        fontWeight:'bold',
        fontSize:40,
        marginBottom: 40
    }
});

export default styles;