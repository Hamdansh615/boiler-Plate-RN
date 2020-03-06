import {Image} from 'react-native-elements';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import styles from '../assets/styles';
import colors from '../assets/color';

class HomeItemsCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.props.onPress}
          style={styles.homeItmBox}>
          <ImageBackground
            source={this.props.images}
            resizeMode="contain"
            style={styles.homeItmImg}
          />
          <Text style={[styles.text3, styles.textAlign, styles.black]}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeItemsCategory;
