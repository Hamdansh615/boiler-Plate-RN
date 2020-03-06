import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from '../assets/styles';
import colors from '../assets/color';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import {NavigationActions, DrawerActions, StackActions} from 'react-navigation';

class SideMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
  }
  // componentDidMount(){}
  // componentWillReceiveProps(){}
  setToTop = () => {
    this.topRef.scrollTo({x: 0, y: 0, animated: true});
  };
  diologModal = () => {
    this.setState({dialogVisible: !this.state.dialogVisible});
  };
  render() {
      const { title,images,onPress = () => {} } = this.props
    return (
        <View style={[styles.flexRow,styles.justifyContentCenter,styles.flex1,styles.ph25]}>
            <TouchableOpacity onPress={() => onPress()}>
            {/* <Image source={images} resizeMode="center"/> */}
            {/* <Text style={[styles.text4,styles.textAlign,styles.font14]}>{title}</Text> */}
            </TouchableOpacity>
        </View>
    )
    
  }
}
export default SideMenuItem;
