import React, {Component} from 'react';
import {Image, View, Text, StatusBar, BackHandler} from 'react-native';
import colors from '../assets/colors';
import styles from '../assets/styles';
import {Header, Icon} from 'react-native-elements';
import {assets} from '../assets/images';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {DrawerAction} from 'react-navigation'
import {connect} from 'react-redux';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      showLeftIcon = false,
      showRigthIcon = false,
      showLeftText = false,
      showRightText = false,
      showCenterText = false,
      showCenterSubText = false,
      showLeftColor = colors.black,
      showRigthColor = colors.black,
      leftRoute = () => {},
      rightRoute = () => {},
      navigation,
    } = this.props;

    return (
      <Header
        containerStyle={styles.headerContainer}
        //////////////////////Left//////////////////////////
        leftComponent={
          <TouchableWithoutFeedback
            style={[styles.pmr10,]}
            onPress={() => leftRoute()}>
            <View style={[styles.justifyContentCenter, styles.alignItemCenter]}>
              {showLeftIcon ? (
                <Image
                  source={showLeftIcon}
                  style={[styles.mt5]}
                  resizeMode="contain"
                />
              ) : (
                <Text style={[styles.headerText, {color: showLeftColor}]}>
                  {' '}
                  {showLeftText}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        }
        ///////////////////////Center/////////////////////////
        centerComponent={
          showCenterSubText ? (
            <TouchableWithoutFeedback
            //   onPress={() => this.props.navigation.openDrawer()}
            >
              <View
                style={[
                  styles.justifyContentCenter,
                  styles.alignItemCenter,
                ]}>
                <Text style={[styles.font12,]}>
                  {showCenterSubText}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <View
              style={[styles.justifyContentCenter, styles.alignItemCenter]}>
              <Text style={[styles.lable, styles.font18]}>
                {showCenterText}
              </Text>
            </View>
          )
        }
        ////////////////////////Right////////////////////////
        rightComponent={
          <TouchableWithoutFeedback
            style={styles.pml10}
            onPress={() => rightRoute()}>
            <View style={[styles.justifyContentCenter, styles.alignItemCenter]}>
              {showRightIcon ? (
                <Image
                  source={showRigthIcon}
                  style={[styles.mt5]}
                  resizeMode="contain"
                />
              ) : (
                <Text style={[styles.headerText, {color: showRigthColor}]}>
                  {' '}
                  {showRightText}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        }
      />
    );
  }
}
export default HeaderComponent
// const mapStateToProps = state => {
//   return {
//     RiskReviewName: state.Get.RiskReviewName,
//   };
// };
// export default connect(mapStateToProps, null)(HeaderComponent);