import { Dimensions, Platform } from "react-native";
import Toast from "react-native-toast-message";

export const isIos=Platform.OS==='ios'
export const {height}=Dimensions.get('screen')
// export const 
export function generateRandomId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export const showSuccess = ({ heading = '', text = '' }) => {
  Toast.show({ type: 'success', text1: heading, text2: typeof text === 'string' ? text : '', autoHide: true, visibilityTime: 1500,position:'top' });
};

export const showError = ({ heading = '', text = '' }) => {
  Toast.show({ type: 'error', text1: heading, text2: typeof text === 'string' ? text : '', autoHide: true, visibilityTime: 1500,position:'top' });
};

