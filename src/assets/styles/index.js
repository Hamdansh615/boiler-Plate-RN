import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../color/';
// import fonts from '../fonts';

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 10,
  },

  flexColomn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexWrap: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexWrapColumn: {
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  h30: {
    height: 30,
  },
  h40: {
    height:40,
  },
  h150: {
    height: 150,
  },
  pmr10: {
    paddingVertical: 6,
    paddingRight: 10,
  },
  pml10: {paddingVertical: 5, paddingLeft: 10},
  pt0: {
    paddingTop: 0,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  p15: {
    padding: 15,
  },
  pt20: {
    paddingTop: 20,
  },
  pt25: {
    paddingTop: 25,
  },
  pt30: {
    paddingTop: 30,
  },
  pt50: {
    paddingTop: 50,
  },
  pd0: {
    paddingBottom: 0,
  },
  pd5: {
    paddingBottom: 5,
  },
  pd10: {
    paddingBottom: 10,
  },
  pd15: {
    paddingBottom: 15,
  },
  pd20: {
    paddingBottom: 20,
  },
  pd25: {
    paddingBottom: 25,
  },
  ph0: {
    paddingHorizontal: 0,
  },
  ph5: {
    paddingHorizontal: 5,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  ph25: {
    paddingHorizontal: 25,
  },
  ph35: {
    paddingHorizontal: 35,
  },
  pv0: {
    paddingVertical: 0,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv15: {
    paddingVertical: 15,
  },
  pv20: {
    paddingVertical: 20,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m15: {
    margin: 15,
  },
  m20: {
    margin: 20,
  },
  m25: {
    margin: 25,
  },
  m30: {
    margin: 30,
  },
  m35: {
    margin: 35,
  },
  mt0: {
    marginTop: 0,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt30: {
    marginTop: 30,
  },
  mt35: {
    marginTop: 35,
  },
  mt38: {
    marginTop: -38,
  },
  md0: {
    marginBottom: 0,
  },
  md5: {
    marginBottom: 5,
  },
  md10: {
    marginBottom: 10,
  },
  md20: {
    marginBottom: 20,
  },
  md25: {
    marginBottom: 25,
  },
  md30: {
    marginBottom: 70,
  },
  mh0: {
    marginHorizontal: 0,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh15: {
    marginHorizontal: 15,
  },
  mh20: {
    marginHorizontal: 20,
  },
  mh25: {
    marginHorizontal: 25,
  },
  mh30: {
    marginHorizontal: 30,
  },
  mh40: {
    marginHorizontal: 40,
  },
  mv10: {
    marginVertical: 10,
  },
  mv15: {
    marginVertical: 15,
  },
  mv20: {
    marginVertical: 20,
  },
  mv30: {
    marginVertical: 30,
  },
  mv50: {
    marginVertical: 50,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 20,
  },
  ml30: {
    marginLeft: 30,
  },
  ml40: {
    marginLeft: 40,
  },
  mr40: {
    marginRight: 40,
  },
  mr20: {
    marginRight: 20,
  },
  ht100: {
    height: '100%',
  },
  ht90: {
    height: '90%',
  },
  ht80: {
    height: '80%',
  },
  ht70: {
    height: '70%',
  },
  ht60: {
    height: '60%',
  },
  ht50: {
    height: '50%',
  },
  wd100: {
    width: '100%',
  },
  wd90: {
    width: '90%',
  },
  wd80: {
    width: '80%',
  },
  wd75: {
    width: '75%',
  },
  wd70: {
    width: '70%',
  },
  wd60: {
    width: '60%',
  },
  wd50: {
    width: '50%',
  },
  left100: {
    left: 100,
  },
  top25: {
    top: 25,
  },
  top15: {
    top: 15,
  },
  bottom: {
    bottom: 0,
    marginTop: 100,
  },
  textAlign: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  alignCntCenter: {
    alignContent: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyCntFS: {
    justifyContent: 'flex-start',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsFlexend: {
    alignItems: 'flex-end',
  },
  textRegularRoboto: {
    // fontFamily: fonts.RobotoRegular,
  },
  textMediumRoboto: {
    // fontFamily: fonts.RobotoMedium,
  },
  textBoldRoboto: {
    // fontFamily: fonts.RobotoBold,
  },
  textGothamMedium: {
    // fontFamily: fonts.GothamMedium,
  },
  White: {
    color: colors.white,
  },
  LightWhite: {
    color: colors.lightWhite,
  },
  themeColor: {
    color: colors.themeColor,
  },
  font10: {
    fontSize: 10,
  },
  font12: {
    fontSize: 12,
  },
  font14: {
    fontSize: 14,
  },
  font16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
  },
  contain: {
    resizeMode: 'contain',
  },
  headerContainer: {
    // backgroundColor: colors.red,
    // borderBottomColor: colors.red,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: 0,
        height: 45,
      },
    }),
  },
  lable: {
    // fontFamily: fonts.Sf_Pro_Text,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    color: colors.black,
  },
  headerText: {
    // fontFamily: fonts.Sf_Pro_Text,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 20,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
      android: {
        marginTop: -25,
      },
    }),
  },

  headerLeftIcon: {
    width: 18,
    height: 18,
    marginTop: 5,
  },
  headerRightIcon: {
    width: 30,
    height: 30,
  },
  mainContainer: {
    flex: 1,
    width,
    height,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  splash: {
    width,
    height,
    position: 'absolute',
  },
  containCenter: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  containBottom: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    flex: 1,
  },
  BgImg: {
    width,
    height,
    position: 'absolute',
  },
  splashLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  introTitle: {
    fontSize: 28,
    // fontFamily: fonts.RobotoBold,
    color: colors.red,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 15,
  },
  elementColor1: {
    // backgroundColor: colors.red,
    ...Platform.select({
      ios: {
        // shadowColor: colors.black,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },
  button: {
    width: '70%',
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 50,
  },
  buttonShaddow: {
    shadowColor: '#000',
    borderWidth: 0.8,
    shadowOpacity: 0.8,
    elevation: 6,
    // color: colors.red,
    shadowOffset: {width: 4, height: 6},
  },
  buttonText: {
    fontSize: 16,
    // fontFamily: fonts.RobotoMedium,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    paddingVertical: 21,
  },
  smallBtnImg: {
    width: 160,
    height: 55,
    alignSelf: 'center',
  },
  smallBtnImg1: {
    width: 190,
    height: 45,
    alignSelf: 'center',
  },
  startBtnImg: {
    width: 130,
    height: 45,
    alignSelf: 'center',
  },
  bg: {
    width,
    height,
    resizeMode: 'stretch',
    position: 'absolute',
  },

  headerBack: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 30,
  },
  headerBackCont: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: 0,
        height: 50,
      },
    }),
  },
  normalBtn: {
    // backgroundColor: colors.red,
    width: '75%',
    height: 40,
    borderRadius: 50,
    marginTop: 30,
    marginVertical: 15,
    alignSelf: 'center',
  },
  normalBtnText: {
    // fontFamily: fonts.GothamMedium,
    fontSize: 16,
    fontWeight: '100',
    // color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 12,
  },
  smallBtnText: {
    // fontFamily: fonts.RobotoRegular,
    fontSize: 12,
    // color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 17,
  },
  startBtnText: {
    // fontFamily: fonts.RobotoRegular,
    fontSize: 12,
    // color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 13,
  },
  logoutBtn: {
    // backgroundColor: colors.red,
    width: '65%',
    height: 50,
    borderRadius: 50,
    marginTop: 30,
    marginVertical: 15,
    alignSelf: 'center',
  },
  loginText: {
    // fontFamily: fonts.GothamMedium,
    fontSize: 16,
    fontWeight: '100',
    color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 10,
  },
  profileImage: {
    marginTop: 60,
    width: 150,
    height: 150,
    padding: 2,
    borderRadius: 70,
  },
  logoutText: {
    // fontFamily: fonts.RobotoMedium,
    fontSize: 16,
    fontWeight: '100',
    // color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 15,
  },
  profileCont: {
    height: 160,
    width: '100%',
    // borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
  profileTitle: {
    // fontFamily: fonts.RobotoRegular,
    fontSize: 20,
    // color: colors.red,
    marginTop: 50,
    textAlign: 'center',
  },
  profileSubText: {
    // fontFamily: fonts.RobotoLight,
    fontSize: 12,
    // color: colors.lightWhite,
    marginTop: 5,
    textAlign: 'center',
  },
  profileText: {
    // fontFamily: fonts.RobotoRegular,
    fontSize: 16,
    // color: colors.lightWhite,
    marginHorizontal: 30,
    marginTop: 30,
  },
  confirmButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.red,
  },
  confirmMsg: {
    fontSize: 18,
    // color: colors.lightWhite,
    ...Platform.select({
      ios: {
        // fontFamily: fonts.RobotoMedium,
      },
      android: {
        // fontFamily: fonts.RobotoMedium,
      },
    }),
  },
  text1: {
    color: colors.red,
    fontFamily: fonts.RobotoMedium,
    fontSize: 24,
    textAlign: 'center',
  },
  text2: {
    color: colors.lightWhite,
    fontFamily: fonts.GothamMedium,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 17,
    textAlign: 'auto',
  },
  text3: {
    color: colors.lightWhite,
    fontFamily: fonts.RobotoRegular,
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'left',
  },
  text4: {
    color: colors.lightWhite,
    fontFamily: fonts.GothamBook,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 17,
    textAlign: 'auto',
  },

  ShareHeader: {
    alignSelf: 'center',
    color: colors.red,
    fontSize: 18,
    fontFamily: fonts.RobotoMedium,
    position: 'absolute',
    top: 30,
  },
  ShareText: {
    textAlign: 'center',
    color: colors.red,
    fontSize: 16,
    // paddingHorizontal: 90,
  },
  ShareSpacer: {
    width: '100%',
    marginVertical: 15,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal3: {
    height: 320,
    width: 350,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 2,
  },
  modal3Btn: {
    backgroundColor: colors.red,
    width: '45%',
    height: 40,
    borderRadius: 50,
    marginTop: 30,
    marginVertical: 15,
    alignSelf: 'center',
  },
  modal3BtnText: {
    fontFamily: fonts.GothamMedium,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 12,
  },
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 30,
    ...Platform.select({
      ios: {
        height: 43,
        width: '95%',
      },
      android: {
        height: 30,
      },
    }),
  },
  tabStyle: {
    backgroundColor: 'transparent',
    borderColor: colors.red,
    borderWidth: 0.7,
  },
  tabTextStyle: {
    fontSize: 12,
    color: colors.red,
    fontFamily: fonts.GothamMedium,
  },
  activeTabStyle: {
    color: colors.white,
    backgroundColor: colors.red,
  },
  activeTabTextStyle: {
    fontFamily: fonts.RobotoBold,
    fontSize: 12,
    color: colors.red,
  },
});
