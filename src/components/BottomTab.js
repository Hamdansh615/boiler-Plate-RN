import React from 'react';
import {Text, View, TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../assets/styles';
import {images} from '../assets/images';
import {BottomTabItem} from '../components';
import colors from '../assets/color';

const TabBarComponent = props => {
  const {navigation} = props;

  const navIndex = navigation.state.index;
  // const routeName = navigation.state.routes[2].routeName;

  return (
    <>
    { navIndex !==2 &&<View style={[styles.flexRow,{opacity:1}]}>
      
        <BottomTabItem
          navIndex={navIndex}
          navigation={() => navigation.navigate('Home')}
          title="Home"
          activeIcon={navIndex === 0 ? images.homeSelected : images.home}
          activeTitle={[navIndex === 0 ? styles.themeColor : styles.grey]}
          float={false}
        />
        <BottomTabItem
          navigation={() => navigation.navigate('Directory')}
          navIndex={navIndex}
          title="Directory"
          activeIcon={
            navIndex === 1 ? images.directorySelected : images.directory
          }
          activeTitle={[navIndex === 1 ? styles.themeColor : styles.grey]}
          float={false}
        />
        <BottomTabItem
          navigation={() => navigation.navigate('AddJob')}
          navIndex={navIndex}
          title="Job Post"
          activeIcon={navIndex === 2 ? images.addJob : images.addJob}
          activeTitle={[navIndex === 2 ? styles.themeColor : styles.grey]}
          float={true}
        />
        <BottomTabItem
          navigation={() => navigation.navigate('Project')}
          navIndex={navIndex}
          title="Project"
          activeIcon={navIndex === 3 ? images.projectSelected : images.projects}
          activeTitle={[navIndex === 3 ? styles.themeColor : styles.grey]}
          float={false}
        />
        <BottomTabItem
          navigation={() => navigation.navigate('Inbox')}
          navIndex={navIndex}
          title="Inbox"
          activeIcon={navIndex === 4 ? images.inboxSelected : images.inbox}
          activeTitle={[navIndex === 4 ? styles.themeColor : styles.grey]}
          float={false}
        />
      </View>}
    </>
  );
};
export default TabBarComponent;
