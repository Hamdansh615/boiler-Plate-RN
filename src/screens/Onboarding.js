import React, {Component} from 'react';
import styles from '../assets/styles';
import {images} from '../assets/images';
import colors from '../assets/color';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  BackHandler,
  KeyboardAvoidingView,
} from 'react-native';
import labels from '../assets/labels/labels';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <View
        style={[
          styles.containCenter,
          styles.mainContainer,
          {backgroundColor: colors.bg},
        ]}
        navigation={this.props.navigation}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          hidden={false}
          backgroundColor="transparent"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={images.signUpBg}
            style={styles.oboardingImg}
            resizeMode="stretch"
          />
          <Image
            source={images.splashLogo}
            style={styles.oboardingLogo}
            resizeMode="contain"
          />
          <View style={[styles.h40]} />
          <View style={[styles.flex1, styles.mh20]}>
            <Text style={[styles.text1, styles.textAlign]}>{labels.login}</Text>
            <Image
              source={images.line}
              style={[styles.alignSelf, styles.mv10]}
            />
            <Text style={[styles.lable, styles.textAlign,styles.font14]}>
              {labels.please}
            </Text>
            <View style={[styles.h40]} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, {backgroundColor: colors.fb}]}
              // onPress={}
            >
              <View style={styles.flexRow}>
                <Image
                  source={images.facebook}
                  style={[styles.mh15, styles.mv10]}
                  resizeMode="contain"
                />
                <Text style={[styles.buttonText, styles.md10, styles.mv12]}>
                  {labels.fb}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.mt10]}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <ImageBackground
                source={images.button}
                style={[styles.buttonImg, {marginTop: 2}]}
                borderRadius={50}
                resizeMode="stretch">
                <View style={[styles.flexRow, styles.alignSelf]}>
                  <Text style={[styles.buttonText, styles.mv12, styles.ml13]}>
                    {labels.mobile}
                  </Text>
                </View>
              </ImageBackground>
              <View style={[styles.h30]} />
            </TouchableOpacity>
            <View style={[styles.flexRow, styles.alignSelf]}>
              <Text style={[styles.text4, styles.black,styles.font12]}>{labels.account}</Text>
              <Text style={[styles.text4,styles.font12, styles.themeColor, styles.ml10]}>
                {labels.createAccount}
              </Text>
            </View>
            <View style={[styles.h30]} />
            <View style={[styles.flexRow, styles.alignSelf, styles.md20]}>
              <Text style={[styles.text4,styles.font12, styles.grey,styles.textAlign]}>
                {labels.bottomText}
              </Text>
              <Text
                style={[styles.text4,styles.font12, styles.themeColor,styles.ml10,styles.bold,]}>
                {labels.terms}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
