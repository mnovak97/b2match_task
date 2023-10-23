import { StyleSheet } from 'react-native'

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

  export default styles;
