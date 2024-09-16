import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './src/pages/MainPage';
import store from './src/store/store';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <MainPage />
        <Toast />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
