import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const Input = ({ value, onChangeText, placeholder }: InputProps) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
      />
);

const styles = StyleSheet.create({
  input: { borderColor: '#EBEAED', borderWidth: 1, padding: 10, borderRadius: 5,marginBottom:10 }
});

export default Input;
