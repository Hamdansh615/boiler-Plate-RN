import React, {Component} from 'react';
import styles from '../assets/styles';
import colors from '../assets/color';
import {images} from '../assets/images';
import ImageLoad from 'react-native-image-placeholder';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import labels from '../assets/labels/labels';

class ProjectItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, category, image, description} = this.props;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.mt15,
            styles.projectItmCont,
          ]}
          // onPress={() =>this.props.navigation.navigate("", { id: null,})}
        >
          <View style={[styles.rowCont, ]}>
            <ImageLoad
              source={ image ?image : image}
              placeholderStyle={styles.BPImg}
              style={styles.BPImg}
              borderRadius={Platform.OS === 'ios' ? 50 : 50}
              loadingStyle={{size: 'small', color: colors.darkblue}}
            />
            <View style={[styles.flex5,]}>
            <View style={[styles.flexColomn,styles.alignSelfStart]}>
              <Text
                style={[styles.text4,styles.black, styles.font18, styles.pt5,styles.lineHeight15]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {title}</Text>
            </View>
            <View style={[styles.flexColomn,styles.alignSelfStart]}>
              <Text
                style={[styles.text4,styles.textAlignLeft,styles.themeColor,styles.font12,styles.pt5,styles.lineHeight15]}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                {labels.category}
                <Text style={[styles.black]}>{" "}{category}</Text>
              </Text>
            </View>
            <View style={[styles.flexColomn]}>
              <Text
                style={[styles.text4, styles.textAlignLeft, styles.grey,styles.font12,styles.pt5,styles.lineHeight15]}
                numberOfLines={2}
                ellipsizeMode="tail">
                {description}
              </Text>
            </View>
          </View>
          </View>
          
        </TouchableOpacity>
      </>
    );
  }
}
export default ProjectItems;
