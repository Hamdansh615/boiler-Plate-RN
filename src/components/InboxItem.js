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

class InboxItem extends Component {
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
            // styles.mv10,
            styles.InboxItmCont,
          ]}
          // onPress={() =>this.props.navigation.navigate("", { id: null,})}
        >
          <View style={[styles.rowCont]}>
            <ImageLoad
              source={ image ? image : image}
              placeholderStyle={styles.inboxImg}
              style={styles.inboxImg}
              borderRadius={Platform.OS === 'ios' ? 50 : 50}
              loadingStyle={{size: 'small', color: colors.darkblue}}
            />
            <View style={[styles.flex3,]}>
             <View style={[styles.flexRow,{justifyContent:'space-between'}]}>
              <Text
                style={[styles.text4,styles.black, styles.font16, styles.pt5,styles.lineHeight15,]}
                numberOfLines={1}
                ellipsizeMode="tail">
                    {title}
              </Text>
              <Text
                style={[styles.text4,styles.textAlign,styles.black,styles.font12,styles.pt5,{top:5}]}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                12:00
              </Text>
             </View>
            <View style={[styles.flexColomn,]}>
                <Text style={[styles.lable,styles.font12]}>Lorem Ipsum is simply dummy text</Text>
            </View>
          </View>
          </View>
          
        </TouchableOpacity>
      </>
    );
  }
}
export default InboxItem;
