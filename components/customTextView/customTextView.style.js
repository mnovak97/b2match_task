import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding:30
    },
    roundedContainer: {
      borderRadius: 25,
      backgroundColor: 'white',
      height: 50,
      width: 250,
      alignItems: 'center'
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 10,
    },
  });

  export default styles;