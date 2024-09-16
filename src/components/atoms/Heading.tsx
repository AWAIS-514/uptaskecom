import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeadingProps {
  label: string;
}

const Heading = ({ label }: HeadingProps) => (
    <Text style={styles.text}>{label}</Text>
);

const styles = StyleSheet.create({
  text: { color: '#11B981',fontSize:16,fontWeight:'600',paddingBottom:5 }
});

export default Heading;
