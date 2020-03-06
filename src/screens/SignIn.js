import React, {Component} from 'react';
import styles from '../assets/styles';
import {images} from '../assets/images';
import colors from '../assets/color';
import {Input} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  StatusBar,
  BackHandler,
  KeyboardAvoidingView,
} from 'react-native';
import labels from '../assets/labels/labels';

const RegxEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
      }

  componentDidMount() {}

  onTextChangeHandler = (name, value) => {
    this.setState({[name]: value});
  };
  handleSignIn = async () => {
    const { email, password} = this.state;
    var validation = `${
      !email
        ? labels.validationEmail
        : email && !RegxEmail.test(email.trim())
        ? labels.validEmail
        : !password
        ? labels.validationPassword
        : !password.length > 4
        ? labels.validPassword
        : true
    }`;
    if (validation === 'true') {
    //   this.props.navigation.navigate("")
    } else {
      Toast.show(validation);
    }
  };
  render() {
      const  { email, password} =this.state
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
          backgroundColor='transparent'
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
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.goBack()}
            >
            <Image
              source={images.back}
              resizeMode="contain"
              style={styles.backBtn}
            />
          </TouchableWithoutFeedback>
          <View style={[styles.h40]} />
          <View style={[styles.flex1, styles.mh20]}>
            <Text style={[styles.text1, styles.textAlign]}>
              {labels.login}
            </Text>
            <Image
              source={images.line}
              style={[styles.alignSelf, styles.mv10]}
            />
            <Text style={[styles.lable, styles.textAlign,styles.font14]}>
              {labels.please2}
            </Text>
            <View style={[styles.h30]} />
            <Input
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.email}
              placeholderTextColor={colors.text}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              inputStyle={[styles.inputStyle]}
              selectionColor="#fff"
              keyboardType="email-address"
              importantForAutofill="no"
              selectTextOnFocus={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={text => this.onTextChangeHandler('email',text)}
              value={email}
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
            />
              <Input
              ref={input => { this.secondTextInput = input;}}
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.password}
              placeholderTextColor={colors.text}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              secureTextEntry={true}
              inputStyle={styles.inputStyle}
              selectionColor="#fff"
              keyboardType="default"
              importantForAutofill="no"
              selectTextOnFocus={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={text => this.onTextChangeHandler('password',text)}
              value={password}
              onSubmitEditing={() => { this.handleSignIn()}}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.mt10]}
              onPress={() => this.props.navigation.navigate("Registeration")}
            >
              <ImageBackground
                source={images.button}
                style={[styles.buttonImg, {marginTop: 2}]}
                borderRadius={50}
                resizeMode="stretch">
                <View style={[styles.flexRow, styles.alignSelf]}>
                  <Text style={[styles.buttonText, styles.mv13, styles.ml13]}>
                    {labels.sendVerification}
                  </Text>
                </View>
              </ImageBackground>
              <View style={[styles.h30]} />
            </TouchableOpacity>
            <View style={[styles.flexRow, styles.alignSelf, styles.md20]}>
              <Text style={[styles.text4,styles.font12, styles.grey]}>
                {labels.bottomText}
              </Text>
              <Text style={[styles.text4,styles.font12, styles.themeColor, styles.ml10,styles.bold]}>
                {labels.terms}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
