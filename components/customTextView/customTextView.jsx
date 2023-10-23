import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './customTextView.style';

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

export default CustomComponent;
