import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
  onDelete: (id: string) => void;
}

const ProductList = ({ onDelete }: ProductListProps) => {
  const products = useSelector((state: RootState) => state.product.products);

  const renderItem = useMemo(() => {
    return ({ item }: any) => (
      <ProductCard id={item.id} name={item.name} price={item.price} onDelete={onDelete} />
    );
  }, [onDelete]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default ProductList;
