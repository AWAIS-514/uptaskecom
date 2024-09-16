import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import ProductList from '../organisms/ProductList';
import Heading from '../atoms/Heading';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { height, showError } from '../../utils/global';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';

interface ProductListTemplateProps {
  onAddProduct: (name: string, price: string) => void;
  onDeleteProduct: (id: string) => void;
}

const ProductListTemplate = ({ onAddProduct, onDeleteProduct }: ProductListTemplateProps) => {
  const [name, setName] = useState<any>('');
  const [price, setPrice] = useState<any>('');

  const products = useSelector((state: RootState) => state.product.products);


  const handleAdd = useCallback(() => {

    if (name.trim() == '') return showError({ heading: 'Please enter product name' })
    if (price.trim() == '') return showError({ heading: 'Please enter product name' })
    if (isNaN(price)) return showError({ heading: 'Price should be number' })


    if (name && price) {
      onAddProduct(name, price);
      setName('');
      setPrice('');
    }
  }, [name, price, onAddProduct]);

  return (
    <View style={styles.continer}>
      <Header label='E-com App' />
      <View style={styles.formContainer}>
        <Heading label='Product Form' />
        <Input value={name} onChangeText={setName} placeholder="Product Name" />
        <Input value={price} onChangeText={setPrice} placeholder="Product Price" />
        <Button title="Submit" onPress={handleAdd} />
      </View>

      {products?.length > 0 &&
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Heading label='Product List' />
            <ProductList onDelete={onDeleteProduct} />
          </ScrollView>
      }

      <Footer label='2024 @ copy right reserved' />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    padding: 20, height: height - 20
  },
  scrollView:
    { flex: 1, marginBottom: 80 , borderWidth: 1, borderColor: '#EBEAED', padding: 10, borderRadius: 10,marginTop:20},
  formContainer: {
    borderWidth: 1, borderColor: '#EBEAED', padding: 10, borderRadius: 10
  },
  
});

export default ProductListTemplate;
