import {Platform} from 'react-native';

const fonts = {
  RobotoRegular: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular',
  RobotoBold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold',
  RobotoMedium: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto-Medium',
  RobotoThin: Platform.OS === 'ios' ? 'Roboto-Thin' : 'Roboto-Thin',
  RobotoLight: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto-Light',
  GothamMedium: Platform.OS === 'ios' ? 'GothamMedium' : 'GOTHAM-MEDIUM',
  GothamBold: Platform.OS === 'ios' ? 'GothamBold' : 'GOTHAM-BOLD',
  GothamLight: Platform.OS === "ios" ?"GothamLight" :"GOTHAM-LIGHT", 
  GothamBook: Platform.OS === "ios" ? "GothamBook" : "GOTHAM-Book",
  GothamXlight: Platform.OS === "ios" ? "Gotham-XLight" : "GOTHAM-XLIGHT",
  AntonRegular: Platform.OS === "ios" ? "Anton-Regular" : "ANTON-REGULAR",
};
export default fonts;
