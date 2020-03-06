import React, {Component} from 'react';
import styles from '../assets/styles';
import {images} from '../assets/images';
import colors from '../assets/color';
import {Input} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  StatusBar,
  BackHandler,
  KeyboardAvoidingView,
} from 'react-native';
import labels from '../assets/labels/labels';
import {HomeHeader, HomeItemsCategory, TopRatedItems} from '../components';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={[
          styles.mainContainer,
          styles.flex1,
          {backgroundColor: colors.bg},
        ]}
        navigation={this.props.navigation}>
        <HomeHeader
          showLeftIcon={images.menu}
          showRightIcon={images.alert}
          showCenterIcon={images.homeLogo}
          badge={null}
          // leftRoute={() => this.props.navigation.openDrawer()}
          //   rightRoute={() => this.props.navigation.navigate('')}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.alignSelf}>
          <View style={[styles.ph20,styles.mt20]}>
            <Text style={[styles.text1,styles.darkblue,styles.textAlign,styles.font22,styles.bold]}>
              {labels.homeTitle}
            </Text>
            <Text style={[styles.lable,styles.textAlign,styles.font12,styles.ph10,styles.mt5,]}>
              {labels.homeSubtext}
            </Text>
            <View style={[styles.homeCont,styles.justifyContentCenter]}>
              <HomeItemsCategory
                images={images.carpentry}
                title={labels.carpentery}
                // onPress={()=> this.props.navigation.navigate("")}
              />
              <HomeItemsCategory
                images={images.plumbing}
                title={labels.plumbing}
                // onPress={()=> this.props.navigation.navigate("")}
              />
              <HomeItemsCategory
                images={images.electric}
                title={labels.electric}
                // onPress={()=> this.props.navigation.navigate("")}
              />
              <HomeItemsCategory
                images={images.electric}
                title={labels.electric}
                // onPress={()=> this.props.navigation.navigate("")}
              />
              <HomeItemsCategory
                images={images.carpentry}
                title={labels.carpentery}
                // onPress={()=> this.props.navigation.navigate("")}
              />
              <HomeItemsCategory
                images={images.plumbing}
                title={labels.plumbing}
                // onPress={()=> this.props.navigation.navigate("")}
              />
            </View>
          </View>
          <View style={styles.ph20}>
            <Text
              style={[ styles.text1, styles.darkblue,styles.textAlign,styles.font18,styles.mt5,]}>
              {labels.topRated}
            </Text>
            <Text
              style={[ styles.lable, styles.textAlign, styles.font12,styles.ph10, styles.mt5,]}>
              {labels.topRatedSubTex}
            </Text>
            <View style={[styles.rateCont]}>
              <TopRatedItems
                images={images.avatar}
                title="Stanley Doe"
                subtitle="Carpenter"
                // onPress={()=> this.props.navigation.navigate("")}
              />
               <TopRatedItems
                images={images.avatar}
                title="James Richardson"
                subtitle='Diginissimos'
                // onPress={()=> this.props.navigation.navigate("")}
              />
               <TopRatedItems
                images={images.avatar}
                title="Anna Coleman"
                subtitle="Consequator"
                // onPress={()=> this.props.navigation.navigate("")}
              />
            </View>
          </View>
          <View style={styles.h30}/>
        </ScrollView>
      </View>
    );
  }
}
