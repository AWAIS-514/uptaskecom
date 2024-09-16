import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => (
   <View style={styles.container}>
     <Text style={styles.text}>{label}</Text>
   </View>
);

const styles = StyleSheet.create({
  container:{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,borderWidth:1,borderColor:'#EBEAED',borderRadius:10},
  text: { color: '#11B981',fontSize:16,fontWeight:'600',paddingBottom:5 }
});

export default Header;
