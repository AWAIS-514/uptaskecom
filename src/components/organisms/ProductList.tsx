import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
  onDelete: (id: string) => void;
}

const ProductList = ({ onDelete }: ProductListProps) => {
  const products = useSelector((state: RootState) => state.product.products);

  return (
      products.map((item: any) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          onDelete={onDelete}
        />
      ))
  );
};

export default ProductList;
