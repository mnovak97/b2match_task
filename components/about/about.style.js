import { StyleSheet } from "react-native";

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

  export default styles;