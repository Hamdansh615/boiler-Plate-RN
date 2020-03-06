import {Image, Rating} from 'react-native-elements';
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

class TopRatedItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
          <Image
            source={this.props.images}
            resizeMode="contain"
            style={[styles.ratedItmImg]}
          />
          <Text style={[styles.text3, styles.textAlign, styles.black]}>
            {this.props.title}
          </Text>
          <Text style={[styles.lable, styles.textAlign, styles.font12]}>
            {this.props.subtitle}
          </Text>
          <Rating
            type="custom"
            ratingColor="#fec311"
            ratingBackgroundColor={colors.bg}
            readonly
            ratingCount={5}
            imageSize={10}
            style={{paddingVertical: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TopRatedItems;
