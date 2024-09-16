import Toast from "react-native-toast-message";

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
  Toast.show({ type: 'success', text1: heading, text2: typeof text === 'string' ? text : '', autoHide: true, visibilityTime: 1500,position:'bottom' });
};

export const showError = ({ heading = '', text = '' }) => {
  Toast.show({ type: 'error', text1: heading, text2: typeof text === 'string' ? text : '', autoHide: true, visibilityTime: 1500,position:'bottom' });
};

export const showInfo = ({ heading = '', text = '' }) => {
  Toast.show({ type: 'info', text1: heading, text2: typeof text === 'string' ? text : '', autoHide: true, visibilityTime: 1500,position:'bottom' });
};
