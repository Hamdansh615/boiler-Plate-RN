import React, {Component} from 'react';
import styles from '../assets/styles';
import colors from '../assets/color';
import {images} from '../assets/images';
import {View, Text, Image, ScrollView} from 'react-native';
import {ProjectItems} from '../components';
import labels from '../assets/labels/labels';
import {HeaderComponent} from '../components';

class AddJob extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.containCenter,
          styles.mainContainer,
          {backgroundColor: colors.bg},
        ]}
        navigation={this.props.navigation}>
        <HeaderComponent
          showLeftIcon={images.back}
          showCenterText={labels.addjob}
          showRightIcon={images.alert}
          badge={null}
          leftRoute={() => this.props.navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <ProjectItems 
                    title="ABC"
                    subText="DEF"
                    image={images.avatar}
                    description="GHI"
                    /> */}
        </ScrollView>
      </View>
    );
  }
}
export default AddJob;
