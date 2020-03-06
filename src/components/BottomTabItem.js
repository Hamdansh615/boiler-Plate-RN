import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../assets/styles';
import colors from '../assets/color';
import { images } from '../assets/images';

class BottomTabItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      navIndex,
      title,
      activeIcon,
      activeTitle,
      float,
      navigation = () => {},
    } = this.props;
    return (
      <View style={[styles.bottomTabItm]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.alignItemCenter]}
          onPress={() => navigation()}>
          {float === true ? (
            <>
              <Image
                style={[styles.bottomTabImg1]}
                source={activeIcon}
                resizeMode="cover"
              />
              <Text style={[styles.bottomTabText, activeTitle, styles.float]}>
                {title}
              </Text>
            </>
          ) : (
            <>
              <Image
                style={[styles.bottomTabImg]}
                source={activeIcon}
                resizeMode="contain"
              />
              <Text style={[styles.bottomTabText, activeTitle]}>{title}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
export default BottomTabItem;
