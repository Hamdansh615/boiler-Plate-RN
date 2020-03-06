import React, {Component} from 'react';
import styles from '../assets/styles';
import {images} from '../assets/images';
import colors from '../assets/color';
import {Input, CheckBox} from 'react-native-elements';
import {HeaderComponent} from '../components';
import Toast from 'react-native-simple-toast';
import PhoneInput from 'react-phone-number-input';
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
// function Example() {
//   // `value` will be the parsed phone number in E.164 format.
//   // Example: "+12133734253".
//   const [value, setValue] = useState()
//   // If `country` property is not passed
//   // then "International" format is used.
//   return (

//   )
// }
export default class Registeration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
      postalCode: '',
      check: false,
    };
  }

  componentDidMount() {}
  onTextChangeHandler = (name, value) => {
    this.setState({[name]: value});
  };
  handleRegister = async () => {
    const {
      name,
      email,
      phoneNo,
      password,
      confirmPassword,
      postalCode,
      check,
    } = this.state;
    var validation = `${
      !name
        ? labels.validationName
        : !email
        ? labels.validationEmail
        : email && !RegxEmail.test(email.trim())
        ? labels.validEmail
        : !phoneNo
        ? labels.validPhone
        : !password
        ? labels.validationPassword
        : !password.length > 4
        ? labels.validPassword
        : confirmPassword != password
        ? labels.validConfirm
        : postalCode
        ? labels.validPostalcode
        : check != false
        ? labels.check
        : true
    }`;
    if (validation === 'true') {
      //   this.props.navigation.navigate("")
    } else {
      Toast.show(validation);
    }
  };
  render() {
    const {
      name,
      email,
      phoneNo,
      password,
      confirmPassword,
      postalCode,
      check,
    } = this.state;
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
          showCenterText={labels.registeration}
          leftRoute={() => this.props.navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.h30]} />
          <View style={[styles.flex1, styles.mh20]}>
            <Text style={[styles.text1, styles.textAlign, styles.black,styles.font22]}>
              {labels.register}
            </Text>
            <Image
              source={images.line}
              style={[styles.alignSelf, styles.mv10]}
            />
            <Text style={[styles.lable, styles.textAlign, styles.font14]}>
              {labels.please3}
            </Text>
            <View style={[styles.h40]} />
            <Input
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.name}
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
              onChangeText={text => this.onTextChangeHandler('name', text)}
              value={name}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
            />
            <Input
              ref={input => {
                this.secondTextInput = input;
              }}
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
              onChangeText={text => this.onTextChangeHandler('email', text)}
              value={email}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
            />
            <View style={[styles.flexRow, styles.flex1]}>
              <View
                style={styles.dropDown}>
                <Text
                  style={styles.dropDownText}>
                  +1
                </Text>
              </View>
              <View style={styles.flex1}>
                <Input
                  ref={input => {
                    this.thirdTextInput = input;
                  }}
                  inputContainerStyle={[styles.inputContainer]}
                  placeholder="Mobile Number"
                  placeholderTextColor={colors.text}
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  inputStyle={[styles.inputStyle]}
                  selectionColor="#fff"
                  keyboardType="phone-pad"
                  importantForAutofill="no"
                  selectTextOnFocus={false}
                  returnKeyType="next"
                  autoCapitalize="none"
                  onChangeText={text =>
                    this.onTextChangeHandler('phoneNo', text)
                  }
                  value={phoneNo}
                  onSubmitEditing={() => {
                    this.fourthTextInput.focus();
                  }}
                />
              </View>
            </View>
            <Input
              ref={input => {
                this.fourthTextInput = input;
              }}
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.password}
              placeholderTextColor={colors.text}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              secureTextEntry={true}
              inputStyle={[styles.inputStyle]}
              selectionColor="#fff"
              keyboardType="email-address"
              importantForAutofill="no"
              selectTextOnFocus={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={text => this.onTextChangeHandler('password', text)}
              value={password}
              onSubmitEditing={() => {
                this.fifthTextInput.focus();
              }}
            />
            <Input
              ref={input => {
                this.fifthTextInput = input;
              }}
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.confirmPassword}
              placeholderTextColor={colors.text}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              secureTextEntry={true}
              inputStyle={[styles.inputStyle]}
              selectionColor="#fff"
              keyboardType="email-address"
              importantForAutofill="no"
              selectTextOnFocus={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={text =>
                this.onTextChangeHandler('confirmPassword', text)
              }
              value={confirmPassword}
              onSubmitEditing={() => {
                this.sixTextInput.focus();
              }}
            />
            <Input
              ref={input => {
                this.sixTextInput = input;
              }}
              inputContainerStyle={styles.inputContainer}
              placeholder={labels.postaCode}
              placeholderTextColor={colors.text}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              inputStyle={[styles.inputStyle]}
              selectionColor="#fff"
              keyboardType="number-pad"
              importantForAutofill="no"
              selectTextOnFocus={false}
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={text =>
                this.onTextChangeHandler('postalCode', text)
              }
              value={postalCode}
              onSubmitEditing={() => {
                this.handleRegister();
              }}
            />
            <View style={[styles.flexRow, styles.alignSelf, styles.mv20]}>
              <CheckBox
                title={labels.acknolwgement}
                textStyle={[styles.black, styles.bold]}
                containerStyle={[styles.checkBoxContainerStyle]}
                checkedIcon={<Image source={images.checkedBox} />}
                uncheckedIcon={<Image source={images.checkbox} />}
                checked={check}
                activeOpacity={0.8}
                onPress={() => this.setState({check: !check})}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.mt10]}
              onPress={() => this.props.navigation.navigate("Verification")}>
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
