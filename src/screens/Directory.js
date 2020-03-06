import React, {Component} from 'react';
import styles from '../assets/styles';
import colors from '../assets/color';
import {images} from '../assets/images';
import {View, Text, Image, ScrollView} from 'react-native';
import {DirectoryItem} from '../components';
import labels from '../assets/labels/labels';
import {HeaderComponent} from '../components';

class Directory extends Component {
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
          showLeftIcon={images.menu}
          showRightIcon={images.alert}
          showCenterText={labels.directory}
          badge={null}
          leftRoute={() => this.props.navigation.goBack()}
        />
        <View style={styles.h20} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <DirectoryItem
            title="ABC"
            image={images.carpentry}
          />
          <DirectoryItem
            title="ABC"
            image={images.plumbing}
          />
           <DirectoryItem
            title="ABC"
            image={images.electric}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Directory;
