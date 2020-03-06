import {Platform} from 'react-native';

const fonts = {
  BariolRegular: Platform.OS === "ios" ? "Nunito-Regular" : "Nunito-Regular",
  BariolBold: Platform.OS === 'ios' ? 'Nunito-Bold' : 'Nunito-Bold',
  BariolSemi: Platform.OS === 'ios' ? 'Nunito-SemiBold' : 'Nunito-SemiBold',
  BariolThin: Platform.OS === 'ios' ? 'Nunito-ExtraLight' : 'Nunito-ExtraLight',
  BariolLight: Platform.OS === 'ios' ? 'Nunito-Light' : 'Nunito-light',

};
export default fonts;
