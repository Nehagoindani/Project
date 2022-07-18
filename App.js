import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';



import SignUp from './android/Screens/SignUp';
import Home from './android/Screens/Home';
import Login from './android/Screens/Login';
import Profile from './android/Screens/Profile';
import List from './android/Screens/List';
import Data from './android/Screens/Data'
import { color } from 'native-base/lib/typescript/theme/styled-system';

const Stack = createStackNavigator()

function Authstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />


    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false ,
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (
          <Icon name='home' size={30} color='red' />

        )
      }} />
      <Tab.Screen name="List" component={List} options={{
        tabBarIcon: () => (
          <IonIcon name='md-today' size={30} color='red' />

        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => (
          <Icon name='account-circle' size={30} color='red' />

        )
      }} />
    </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();

function DrawerTab() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false }} >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
     
    </Drawer.Navigator>

  );
}

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" options={{ headerShown: false }} component={BottomTab} />
    </Stack.Navigator>
  )
}

const App = () => {

  const [token, setToken] = useState('null')

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {
          token == null ? (
            <>
              <Authstack />
            </>
          ) : (
            <>
              {/* <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />

              </Drawer.Navigator> */}
              <Drawer.Navigator initialRouteName="Home" screenOptions={{  drawerPosition: "right",}} >
                <Drawer.Screen name="Home" component={DrawerTab} />
                <Drawer.Screen name="Data" component={Data} />
              
              </Drawer.Navigator>
            </>
          )
        }
      </NativeBaseProvider>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,

    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
