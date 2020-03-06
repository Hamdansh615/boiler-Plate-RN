import React, {Component} from 'react';
import {View, Text, Image, StatusBar, BackHandler} from 'react-native';
import styles from '../assets/styles';
import {images} from '../assets/images';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {
      setTimeout(() => {
          this.props.navigation.navigate('Onboarding')
      },3000)
  var screenName = this.props.navigation.state.routeName
  if (screenName == "Splash"){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    return (  
    <View style={[styles.containCenter,styles.mainContainer]} navigation={this.props.navigation}>
      <StatusBar hidden={true} />
      <Image
          source={images.splashBg}
          style={styles.splash}
          resizeMode="stretch"
        />
        <Image
        source={images.splashLogo}
        style={styles.splashLogo}
        resizeMode='contain' />
    </View>
    );
  }
}
