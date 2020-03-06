import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  BackHandler,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../assets/color';
import styles from '../assets/styles';
import {Header,Badge} from 'react-native-elements';
import {images} from '../assets/images';
import {DrawerAction} from 'react-navigation';
import {connect} from 'react-redux';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      showLeftIcon = false,
      showRightIcon = false,
      showLeftText = false,
      showRightText = false,
      showCenterText = false,
      showLeftColor = colors.white,
      showRigthColor = colors.white,
      badge=null,
      leftRoute = () => {},
      rightRoute = () => {},
      navigation,
    } = this.props;

    return (
      <View>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          hidden={false}
          backgroundColor="transparent"
        />
        <Header
          backgroundImage={images.tapbar}
          backgroundImageStyle={styles.headerBg}
          containerStyle={styles.headerContainer}
          //////////////////////Left//////////////////////////
          leftComponent={
            <TouchableWithoutFeedback
              style={[styles.pmr10]}
              hitSlop={styles.hitSlop}
              onPress={() => leftRoute()}>
              <View
                style={[styles.justifyContentCenter, styles.alignItemCenter]}>
                {showLeftIcon ? (
                  <Image
                    source={showLeftIcon}
                    resizeMode="contain"
                  />
                ) : (
                  <Text style={[styles.headerText]}>
                    {showLeftText}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          }
          ///////////////////////Center/////////////////////////
          centerComponent={

              <View
                style={[styles.justifyContentCenter, styles.alignItemCenter]}>
                <Text style={[styles.lable,styles.White, styles.font18]}>
                  {showCenterText}
                </Text>
              </View>
            
          }
          ////////////////////////Right////////////////////////
          rightComponent={
            <TouchableWithoutFeedback
              style={badge !=null ? styles.pml101:styles.pml10}
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
          }/>
      </View>
    );
  }
}
export default HeaderComponent;
// const mapStateToProps = state => {
//   return {
//     RiskReviewName: state.Get.RiskReviewName,
//   };
// };
// export default connect(mapStateToProps, null)(HeaderComponent);
