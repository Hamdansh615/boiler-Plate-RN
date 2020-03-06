import AuthActions from '../actions/AuthAction';
import Api from '../../config/Api';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

export default class AuthMiddleware {

// static NetStatus() {
//     return async dispatch => {
//         dispatch(AuthActions.CheckUserCall());
//         NetInfo.isConnected.fetch().then(isConnected => {
//         if (isConnected) {
//             dispatch(AuthActions.CheckUserSuccess(payload));
//         } else {
//             dispatch(AuthActions.CheckUserFail(payload));
//             Toast.show('No Internet Connection');
//         }
//         });
//     };
// }

  static SignUp(payload) {
    return async dispatch => {
      dispatch(AuthActions.SignUpCall());
      var result = await Api._post('register', payload, true);
      if (result.status) {
        Toast.show(result.response.message);
        AsyncStorage.setItem('user_detail',JSON.stringify(result.response.detail),);
        dispatch(AuthActions.SignUpSuccess(result.response.detail));
      } else {
        dispatch(AuthActions.SignUpFail(result.error));
        Toast.show(result.error.message );
      }
    };
  }
  static SignIn(payload) {
    return async dispatch => {
      dispatch(AuthActions.SignInCall());
      var result = await Api._post('', payload, true);
      if (result.response.message == 'successfully login') {
        Toast.show(result.response.message);
        AsyncStorage.setItem('user_detail', JSON.stringify(result.response.detail),);
        dispatch(AuthActions.SignInSuccess(result.response.detail));
      } else {
        dispatch(AuthActions.SignInFail(result.error));
        Toast.show(result.error.message + '\n' + JSON.stringify(result.error.detail),);
      }
    };
  }
  static SignOut() {
    return async dispatch => {
      dispatch(AuthActions.SignOutCall());
      var result = await Api._post('', {}, true);
      if (result.status) {
        Toast.show(result.response.message);
        AsyncStorage.removeItem('user_detail');
        dispatch(AuthActions.SignOutSuccess());
      } else {
        dispatch(AuthActions.SignOutFail(result.error));
        Toast.show( JSON.stringify(result.error.message));
      }
    };
  }
  static ForgotPassword(payload) {
    return async dispatch => {
      dispatch(AuthActions.ForgotPasswordCall());
      var result = await Api._post('', payload, true);
      if (result.status) {
        Toast.show(result.response.message);
        dispatch(AuthActions.ForgotPasswordSuccess(payload));
      } else {
        dispatch(AuthActions.ForgotPasswordFail());
        Toast.show(result.error.message + '\n' + JSON.stringify(result.error.detail),);
      }
    };
  }
  static ResetPassword(payload) {
    return async dispatch => {
      dispatch(AuthActions.ResetPasswordCall());
      var result = await Api._post('', payload, true);
      if (result.status) {
        Toast.show(result.response.message);
        dispatch(AuthActions.ResetPasswordSuccess());
      } else {
        dispatch(AuthActions.ResetPasswordFail());
        Toast.show(result.error.message + '\n' + JSON.stringify(result.error.detail),
        );
      }
    };
  }
  static ChangePassword(payload) {
    return async dispatch => {
      dispatch(AuthActions.ChangePasswordCall());
      var result = await Api._post('', payload, true);
      if (result.status) {
        Toast.show(result.response.message);
        dispatch(AuthActions.ChangePasswordSuccess(payload));
      } else {
        dispatch(AuthActions.ChangePasswordFail());
        Toast.show(result.error.message + '\n' + JSON.stringify(result.error.detail),);
      }
    };
  }

}
