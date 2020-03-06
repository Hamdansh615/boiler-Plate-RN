import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  BackHandler,
  ImageBackground,
} from 'react-native';
import colors from '../assets/color';
import styles from '../assets/styles';
import {Header, Input, Icon, Badge} from 'react-native-elements';
import {images} from '../assets/images';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import labels from '../assets/labels/labels';
import {DrawerAction} from 'react-navigation';
import {connect} from 'react-redux';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search:" "
    };
  }
  onTextChangeHandler = (name, value) => {
    this.setState({[name]: value});
  };
  search(){
    alert('not done')
  }
  render() {
    const {
      showLeftIcon = false,
      showRightIcon = false,
      showCenterIcon = false,
      showLeftText = false,
      showRightText = false,
      showCenterText = false,
      showLeftColor = colors.white,
      showRigthColor = colors.white,
      badge=1,
      leftRoute = () => {},
      rightRoute = () => {},
      navigation,
    } = this.props;
    const { search} = this.state
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          hidden={false}
          backgroundColor="transparent"
        />
        <Header
          backgroundImage={images.homeBg}
          backgroundImageStyle={styles.headerhomeBg}
          containerStyle={styles.headerhomeContainer}
          //////////////////////Left//////////////////////////
          leftComponent={
            <TouchableWithoutFeedback
              style={[styles.homeLeftImg]}
              hitSlop={styles.hitSlop}
              onPress={() => leftRoute()}>
              <View
                style={[styles.justifyContentCenter, styles.alignItemCenter]}>
                {showLeftIcon ? (
                  <Image source={showLeftIcon} resizeMode="contain" />
                ) : (
                  <Text style={[styles.headerText]}>{showLeftText}</Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          }
          ///////////////////////Center/////////////////////////
          centerComponent={
            <View
              style={[
                styles.justifyContentCenter,
                styles.alignItemCenter,
                styles.mt5,
              ]}>
              <Image source={showCenterIcon} resizeMode="contain" />
              <Input
                inputContainerStyle={[styles.inputHomeContainer,styles.mt30]}
                rightIcon={<TouchableWithoutFeedback onPress={() => this.search()}><Image source={images.search} resizeMode="contain"/></TouchableWithoutFeedback>}
                rightIconContainerStyle={{marginRight:10,}}
                placeholder={labels.search}
                placeholderTextColor={colors.grey}
                autoCorrect={true}
                inputStyle={[styles.inputStyle]}
                keyboardType="default"
                importantForAutofill="no"
                selectTextOnFocus={true}
                keyboardType="web-search"
                returnKeyType="search"
                autoCapitalize="none"
                onChangeText={text => this.onTextChangeHandler('search', text)}
                value={search}
                // onSubmitEditing={() => {
                //   this.secondTextInput.focus();
                // }}
              />
            </View>
          }
          ////////////////////////Right////////////////////////
          rightComponent={
            <TouchableWithoutFeedback
              style={badge !=null ? styles.homeRightImg : styles.homeRightImg1 }
              hitSlop={styles.hitSlop}
              onPress={() => rightRoute()}>
              <View
                style={[styles.justifyContentCenter, styles.alignItemCenter]}>
                {showRightIcon && badge !=null? (
                  <View style={styles.flexRow}>
                  <Image source={showRightIcon} resizeMode="contain" />
                  <Badge value={badge} status="error" containerStyle={{position:'relative',right:10}}/>
                  </View>
                ) : (
                  <Image source={showRightIcon} resizeMode="contain" />
                )}
              </View>
            </TouchableWithoutFeedback>
          }
        />
      </View>
    );
  }
}
export default HomeHeader;
// const mapStateToProps = state => {
//   return {
//     Auth: state.Auth
//   };
// };
// export default connect(mapStateToProps, null)(HeaderComponent);
