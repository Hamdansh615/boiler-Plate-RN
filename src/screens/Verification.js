import React, {Component} from 'react';
import styles from '../assets/styles';
import {images} from '../assets/images';
import colors from '../assets/color';
import {Input, CheckBox} from 'react-native-elements';
import {HeaderComponent, OtpInputs} from '../components';
import Toast from 'react-native-simple-toast';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import labels from '../assets/labels/labels';

export default class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ' ',
    };
  }

  componentDidMount() {}

  getOtp(otp) {
    console.log(otp);
    this.setState({otp});
  }
 
  render() {
    const {otp} = this.state;
    return (
      <View
        style={[
          styles.containCenter,
          styles.mainContainer,
          {backgroundColor: colors.bg},
        ]}
        navigation={this.props.navigation}>
        <HeaderComponent
          showLeftIcon={images.back}
          showCenterText={labels.verfication}
          leftRoute={() => this.props.navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.h40]} />
          <View style={[styles.flex1, styles.mh20]}>
            <Text style={[styles.text1, styles.textAlign, styles.black,styles.font22]}>
              {labels.verify}
            </Text>
            <Image
              source={images.line}
              style={[styles.alignSelf, styles.mv10]}
            />
            <Text style={[styles.text2, styles.black, styles.verify,styles.font16]}>
              {labels.verifyTitle}
            </Text>
            <Text style={[styles.lable, styles.textAlign, styles.mt5]}>
              {labels.sentTo} +123 321 5513
            </Text>
            <View style={styles.otp}>
              <OtpInputs getOtp={otp => this.getOtp(otp)} />
            </View>
            <Text style={[styles.lable, styles.textAlign, styles.mt10,styles.font14]}>
              {labels.dontReceive}
            </Text>
            <Text style={[styles.text2, styles.verify,styles.font14]}>{labels.resent}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.mt10]}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <ImageBackground
                source={images.button}
                style={[styles.buttonImg, {marginTop: 2}]}
                borderRadius={50}
                resizeMode="stretch">
                <View style={[styles.flexRow, styles.alignSelf]}>
                  <Text style={[styles.buttonText, styles.mv13]}>
                    {labels.next}
                  </Text>
                </View>
              </ImageBackground>
              <View style={[styles.h30]} />
            </TouchableOpacity>
            <View
              style={[styles.flexRow, styles.alignSelf, styles.md20]}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
