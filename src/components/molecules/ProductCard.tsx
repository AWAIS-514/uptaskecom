import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../atoms/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  onDelete: (id: string) => void;
}

const ProductCard = ({ id, name, price, onDelete }: ProductCardProps) => {
  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <View style={styles.card}>
      <Text>Product Name : {name}</Text>
      <Text style={styles.priceHeading}>Product Price :<Text style={styles.price}> ${price}</Text></Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#EBEAED',marginTop:10 },
  priceHeading:{marginBottom:10},
  price:{fontWeight:'500',marginBottom:20}
});

export default ProductCard;
