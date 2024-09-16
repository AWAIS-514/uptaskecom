import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { isIos } from '../../utils/global';

interface FooterProps {
  label: string;
}

const Footer = ({ label }: FooterProps) => (
   <View style={styles.container}>
     <Text style={styles.text}>{label}</Text>
   </View>
);

const styles = StyleSheet.create({
  container:{width:'100%',height:50,display:'flex',alignItems:'center',justifyContent:'center',marginTop:20,borderWidth:1,borderColor:'#EBEAED',borderRadius:10,position:'absolute',bottom:isIos?60: 40,left:'5%' ,backgroundColor:'#fff'},
  text: { color: '#11B981',fontSize:11,fontWeight:'600',paddingBottom:5 }
});

export default Footer;
