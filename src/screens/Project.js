import React, {Component} from 'react';
import styles from '../assets/styles';
import colors from '../assets/color';
import {images} from '../assets/images';
import {View, Text, Image, ScrollView} from 'react-native';
import {ProjectItems} from '../components';
import labels from '../assets/labels/labels';
import {HeaderComponent} from '../components';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customStyleIndex: 2,
    };
  }
  handleSingleIndexSelect = index => {
    this.setState(prevState => ({...prevState, customStyleIndex: index}));
  };
  render() {
    const {customStyleIndex} = this.state;
    return (
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: colors.bg},
        ]}
        navigation={this.props.navigation}>
        <HeaderComponent
          showLeftIcon={images.menu}
          showRightIcon={images.alert}
          showCenterText={labels.projects}
          leftRoute={() => this.props.navigation.goBack()}
          bage={null}
        />
        <View style={styles.h20} />
        <SegmentedControlTab
          values={['Completed', 'Ongoing', 'Notes']}
          borderRadius={80}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleSingleIndexSelect}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.White}
        />
        {customStyleIndex === 0 && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={(styles.mt10)}>
            <ProjectItems
              title="First"
              category="Plumbing"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            />
            <ProjectItems
              title="Second"
              category="Carpenter"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            />
            <ProjectItems
              title="Third"
              category="Electician"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            />
            <View style={styles.h20} />
          </ScrollView>
        )}
         {customStyleIndex === 1 && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={(styles.ph10, styles.mt10)}>
            <ProjectItems
              title="First"
              category="Plumbing"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ProjectItems
              title="Second"
              category="Carpenter"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ProjectItems
              title="Third"
              category="Electician"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <View style={styles.h20} />
          </ScrollView>
        )}
         {customStyleIndex === 2 && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={(styles.ph10, styles.mt10)}>
            <ProjectItems
              title="First"
              category="Plumbing"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ProjectItems
              title="Second"
              category="Carpenter"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ProjectItems
              title="Third"
              category="Electician"
              image={images.avatar}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <View style={styles.h20} />
          </ScrollView>
        )}
      </View>
    );
  }
}
export default Project;
