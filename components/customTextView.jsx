import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomComponent = ({ imageName, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View style={styles.contentContainer}>
          <Feather name={imageName} size={24} color="black" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

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

export default CustomComponent;
