import React from 'react';
import { useDispatch } from 'react-redux';
import ProductListTemplate from '../components/templates/ProductListTemplate';
import { addProduct, deleteProduct } from '../store/productSlice';
import { generateRandomId } from '../utils/global';


const MainPage = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (name: string, price: string) => {
    dispatch(addProduct({ id: generateRandomId(), name, price }));
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <ProductListTemplate onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} />
  );
};

export default MainPage;
