import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import { SideMenuItem } from "../components"
import labels from '../assets/labels/labels';
import {images} from '../assets/images';

class SideMenu extends Component {

  // componentDidMount(){}
  // componentWillReceiveProps(){}

  render() {
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <SideMenuItem 
            title = {labels.homeTitle} 
            image = {images.home}
            // onPress = {()=> this.props.navigation.navigate("")}
            />
    </ScrollView>
    );
  }
}
export default SideMenu;
