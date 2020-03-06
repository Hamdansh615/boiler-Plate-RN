import axios from 'axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

class Api {
  constructor() {
    this.baseURL = '';
  }
  async _post(endPoint, params) {
    var user = await AsyncStorage.getItem('user_detail');
    if (user == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'user-id': JSON.parse(user).user_id,
          'auth-id': JSON.parse(user).auth_id,
        },
      });
    }
    return this.instance.post(endPoint, params).then(response => {

        console.log(response.headers);
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  }
  async _get(endPoint, params,) {
    var user = await AsyncStorage.getItem('user_detail');
    if (user == null) {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseURL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'user-id': JSON.parse(user).user_id,
          'auth-id': JSON.parse(user).auth_id,
        },
      });
    }
    return this.instance.get(endPoint, params).then(response => {
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  }
}

export default new Api();
