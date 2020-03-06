import {Dimensions} from 'react-native';
import {
  Splash,
  Onboarding,
  SignIn,
  Registeration,
  Verification,
  Home,
  Project,
  Directory,
  AddJob,
  Inbox
} from '../screens';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabBarComponent,SideMenu} from '../components';
import colors from '../assets/color';

Splash.navigationOptions = {
  header: null,
};

Onboarding.navigationOptions = {
  header: null,
};

Registeration.navigationOptions = {
  header: null,
};
SignIn.navigationOptions = {
  header: null,
};
Verification.navigationOptions = {
  header: null,
};
Home.navigationOptions = {
  header: null,
};
Project.navigationOptions = {
  header: null
};
Directory.navigationOptions = {
  header: null
};
AddJob.navigationOptions = {
  header: null
};
Inbox.navigationOptions = {
  header: null
}

const AuthStack = createStackNavigator(
  {
    Splash: {screen: Splash},
    Onboarding: {screen: Onboarding},
    Registeration: {screen: Registeration},
    SignIn: {screen: SignIn},
    Verification: {screen: Verification},
  },
  {
    headerMode: 'none',
    transparentCard: true,
    cardOverlayEnabled: true,
    cardStyle: {
      backgroundColor: 'transparent',
    },
    gesturesEnabled: false,
    initialRouteName: 'Splash',
  },
  {
    navigationOptions: ({navigation}) => ({
      drawerLockMode: 'locked-closed',
      headerVisible: false,
    }),
  },
);
const TabStack = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Directory:{screen: Directory},
    AddJob: {screen: AddJob},
    Project: {screen: Project},
    Inbox: {screen: Inbox},
    
  },
  {
    tabBarComponent: TabBarComponent,
    // tabBarOptions:{
    //   activeBackgroundColor:colors.bg,
    //   inactiveBackgroundColor:colors.bg,
    //   activeTintColor:colors.bg,
    //   inactiveTintColor:colors.bg,
    //   tabStyle:colors.bg
    // }
  },
);
// const DrawerStack = createDrawerNavigator(
//   {
//     RootStack: {
//       screen: AppStack,
//       navigationOptions:({ navigation }) => (
//         {
//         drawerLockMode: "locked-open"
//         })
//     },
//   },
//   {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 70,
//     drawerBackgroundColor: colors.bg,
//   },
// );
  const AppStack = createStackNavigator(
    {
      AuthStack:AuthStack,
      Tabs: TabStack,
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // : {screen: },
      // :{screen: },
    },
    {
      headerMode: 'none',
      gesturesEnabled: false,
      initialRouteName: 'Tabs', //
    },
  );



export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
      // Drawer: DrawerStack,
    },
    {
      initialRouteName: 'App',
      gesturesEnabled: false,
    },
  ),
);

// const Routes = createAppContainer(AuthStack);
// export default Routes;