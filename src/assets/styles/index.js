import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../color/';
import fonts from '../fonts';

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
  h20: {
    height: 20,
  },
  h30: {
    height: 30,
  },
  h40: {
    height: 40,
  },
  h50: {
    height: 50,
  },
  h60: {
    height: 60,
  },
  h150: {
    height: 150,
  },
  pmr10: {
    paddingVertical: 6,
    paddingRight: 20,
    left: 15,
  },
  homeLeftImg: {
    marginBottom: 90,
    // marginLeft: 15,
    left: 11,
  },
  homeRightImg: {
    marginBottom: 88,
    // marginRight: 0,
    right: -5,
  },
  homeRightImg1: {
    marginBottom: 88,
    // marginRight: 15,
    right: 15,
  },
  pml101: {
    paddingVertical: 5,
    right: 5,
  },
  pml10: {
    paddingVertical: 5,
    paddingLeft: 15,
  },
  pt0: {
    paddingTop: 0,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  p10: {
    padding: 10,
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
  mh13: {
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
  mv5: {
    marginVertical: 5,
  },
  mv10: {
    marginVertical: 10,
  },
  mv11: {
    paddingVertical: 11,
  },
  mv12: {
    marginVertical: 12,
  },
  mv13: {
    marginVertical: 13.5,
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
  ml13: {
    marginLeft: 13,
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
  alignSelfStart: {
    alignSelf: 'flex-start',
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
  textBariolRegular: {
    fontFamily: fonts.BariolRegular,
  },
  textBariolBold: {
    fontFamily: fonts.BariolBold,
  },
  textBariolSemi: {
    fontFamily: fonts.BariolSemi,
  },
  textBariolLight: {
    fontFamily: fonts.BariolLight,
  },
  textBariolThin: {
    fontFamily: fonts.BariolThin,
  },
  White: {
    color: colors.white,
  },
  LightWhite: {
    color: colors.lightWhite,
  },
  themeColor: {
    color: colors.blue,
  },
  darkblue: {
    color: colors.darkblue,
  },
  black: {
    color: colors.black,
  },
  grey: {
    color: colors.grey,
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
  font20: {
    fontSize: 20,
  },
  font22: {
    fontSize: 22,
  },
  lable: {
    fontFamily: fonts.BariolBold,
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 20,
    color: colors.grey,
  },
  text1: {
    color: colors.darkblue,
    fontFamily: fonts.BariolBold,
    fontWeight: '900',
    fontSize: 26,
    textAlign: 'center',
  },
  text2: {
    color: colors.blue,
    fontFamily: fonts.BariolRegular,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 17,
    textAlign: 'center',
  },
  text3: {
    color: colors.blue,
    fontFamily: fonts.BariolRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 23,
    textAlign: 'center',
  },
  text4: {
    color: colors.blue,
    fontFamily: fonts.BariolRegular,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 18,
    textAlign: 'center',
  },
  lineHeight15: {
    lineHeight: 15,
  },
  bold: {
    fontWeight: '800',
  },
  contain: {
    resizeMode: 'contain',
  },
  headerhomeBg: {
    height: 170,
    width: width,
    resizeMode: 'stretch',
  },
  headerhomeContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: 0,
        height: 170,
      },
    }),
  },
  headerBg: {
    width: width,
    height: 80,
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        marginTop: 0,
      },
      android: {
        marginTop: 0,
        height: 80,
      },
    }),
  },
  headerText: {
    fontFamily: fonts.BariolRegular,
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
    width: 250,
    height: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 140,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },
  button: {
    borderColor: colors.blue,
    width: '90%',
    height: 45,
    marginTop: 5,
    marginBottom: 5,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    borderRadius: 50,
  },
  buttonShaddow: {
    borderColor: 'transparent',
    alignSelf: 'center',
    width: '90%',
    shadowColor: '#000',
    borderWidth: 0.8,
    borderRadius: 100,
    shadowOpacity: 0.8,
    elevation: 3,
    shadowOffset: {width: 1, height: 6},
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fonts.BariolBold,
    textAlign: 'center',
    color: colors.white,
  },
  buttonImg: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
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
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 30,
    width: 20,
    height: 20,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
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
    backgroundColor: colors.blue,
    width: '75%',
    height: 40,
    borderRadius: 50,
    marginTop: 30,
    marginVertical: 15,
    alignSelf: 'center',
  },
  normalBtnText: {
    fontFamily: fonts.BariolRegular,
    fontSize: 16,
    fontWeight: '100',
    color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 12,
  },
  smallBtnText: {
    fontFamily: fonts.BariolRegular,
    fontSize: 12,
    color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 17,
  },
  startBtnText: {
    fontFamily: fonts.BariolRegular,
    fontSize: 12,
    color: colors.lightWhite,
    textAlign: 'center',
    paddingVertical: 13,
  },
  checkBoxContainerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingVertical: -15,
  },
  profileImage: {
    marginTop: 60,
    width: 150,
    height: 150,
    padding: 2,
    borderRadius: 70,
  },
  confirmButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blue,
  },
  confirmMsg: {
    fontSize: 18,
    color: colors.lightWhite,
    ...Platform.select({
      ios: {
        fontFamily: fonts.BariolRegular,
      },
      android: {
        fontFamily: fonts.BariolRegular,
      },
    }),
  },
  ShareHeader: {
    alignSelf: 'center',
    color: colors.blue,
    fontSize: 18,
    fontFamily: fonts.BariolRegular,
    position: 'absolute',
    top: 30,
  },
  ShareText: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: 16,
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
    backgroundColor: colors.blue,
    width: '45%',
    height: 40,
    borderRadius: 50,
    marginTop: 30,
    marginVertical: 15,
    alignSelf: 'center',
  },
  modal3BtnText: {
    fontFamily: fonts.BariolRegular,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 12,
  },
  tabsContainerStyle: {
    backgroundColor: colors.bg,
    borderColor: 'transparent',
    width: '85%',
    marginBottom: 5,
    borderRadius: 50,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        height: 43,
        width: '95%',
      },
      android: {
        height: 45,
        elevation: 6,
      },
    }),
  },

  tabTextStyle: {
    fontSize: 14,
    color: colors.grey,
    fontFamily: fonts.BariolRegular,
  },
  tabStyle: {
    backgroundColor: colors.bg,
    borderColor: 'transparent',
    borderRadius: 80,
    borderWidth: 0.7,
  },
  activeTabStyle: {
    color: colors.white,
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderRadius: 80,
  },
  activeTabTextStyle: {
    fontFamily: fonts.BariolRegular,
    fontSize: 12,
    color: colors.blue,
  },
  oboardingImg: {
    width,
    height: 330,
  },
  oboardingLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 90,
  },
  inputHomeContainer: {
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: width - 80,
    height: 40,
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    borderColor: 'transparent',
    marginVertical: 10,
  },
  inputStyle: {
    fontSize: 15,
    fontFamily: fonts.BariolRegular,
    paddingLeft: 20,
    borderRadius: 50,
    color: colors.blue,
  },
  verify: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 10,
    lineHeight: 22,
  },
  gridPad: {padding: 30},
  txtMargin: {margin: 3},
  inputRadius: {textAlign: 'center'},
  otp: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    backgroundColor: colors.bg,
    padding: 8,
  },
  homeItmBox: {
    justifyContent: 'center',
    elevation: 4,
    borderColor: colors.bg,
    borderRadius: 15,
    backgroundColor: colors.white,
    width: 90,
    height: 85,
    margin: 5,
  },
  homeItmImg: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
  homeCont: {
    flex: 1,
    display: 'flex',
    marginVertical: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ratedItmBox: {
    elevation: 4,
    borderColor: colors.bg,
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 15,
  },
  ratedItmImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
  },
  rateCont: {
    flex: 1,
    display: 'flex',
    marginTop: 15,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  bottomTabItm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 5,
    opacity: 1,
    backgroundColor: colors.bg,
  },
  dropDown: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: colors.white,
    elevation: 6,
    marginTop: 12,
    marginLeft: 10,
  },
  dropDownText: {
    marginTop: 10,
    marginLeft: 12,
    color: colors.blue,
  },
  bottomTabImg: {
    alignSelf: 'center',
  },
  bottomTabImg1: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    // position:'absolute',
    top: -15,
  },
  bottomTabText: {
    fontFamily: fonts.BariolBold,
    fontWeight: '900',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.grey,
    marginBottom: 5,
  },

  float: {
    // position:'absolute',
    top: -5,
  },
  rowCont: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  BPImg: {
    height: 70,
    width: 70,
    margin: 2,
    marginRight: 10,
    backgroundColor: colors.bg,
    borderRadius: 50,
    resizeMode: 'stretch',
  },
  projectItmCont: {
    backgroundColor: colors.white,
    width: '85%',
    alignSelf: 'center',
    elevation: 3,
    padding: 5,
    borderRadius: 20,
  },
  directoryImg: {
    height: 50,
    width: 50,
    margin: 5,
    // borderRadius: 50,
    resizeMode: 'stretch',
  },
  directoryItmCont: {
    backgroundColor: colors.white,
    width: '85%',
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 20,
    padding: 5,
  },
  InboxItmCont: {
    backgroundColor: colors.bg,
    width: '90%',
    alignSelf: 'center',
    padding: 5,
    borderWidth: 0.7,
    borderColor: colors.bg,
    borderBottomColor: colors.grey,
  },
  inboxImg: {
    height: 70,
    width: 70,
    margin: 6,
    borderRadius: 50,
    backgroundColor: colors.bg,
    resizeMode: 'stretch',
  },
});
