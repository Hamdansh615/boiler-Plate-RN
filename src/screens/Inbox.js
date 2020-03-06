import React, {Component} from 'react';
import styles from '../assets/styles';
import colors from '../assets/color';
import {images} from '../assets/images';
import {View, Text, Image, ScrollView} from 'react-native';
import {InboxItem} from '../components';
import labels from '../assets/labels/labels';
import {HeaderComponent} from '../components';

class Inbox extends Component {
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
          showCenterText={labels.inbox}
          badge={null}
          leftRoute={() => this.props.navigation.goBack()}
        />
        {/* <View style={styles.h20} /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <InboxItem title="James Richardson" image={images.avatar} />
          <InboxItem title="James Richardson" image={images.avatar} />
          <InboxItem title="James Richardson" image={images.avatar} />
          <InboxItem title="James Richardson" image={images.avatar} />
          <InboxItem title="James Richardson" image={images.avatar} />
          <InboxItem title="James Richardson" image={images.avatar} />
          <View style={styles.h60} />
        </ScrollView>
      </View>
    );
  }
}
export default Inbox;
