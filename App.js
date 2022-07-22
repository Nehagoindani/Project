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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SignUp from './android/Screens/SignUp';
import Home from './android/Screens/Home';
import Login from './android/Screens/Login';
import Profile from './android/Screens/Profile';
import List from './android/Screens/List';
import Data from './android/Screens/Data'
import DrawerContent from './android/Screens/DrawerContent';
import AppContext from './android/Screens/Provider/Context';
import List2 from './android/Screens/List2';
import List3 from './android/Screens/List3';
import About from './android/Screens/About';
import List4 from './android/Screens/List4';
import Descreption from './android/Screens/Descreption';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Provider } from 'react-redux';
import store from './android/Redux/Store';
const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = ({navigation}) => {

  const [token, setToken] = useState(null)
  const [imagesList, setImagesList] = useState(null)
  const [profileImage, setProfileImage] = useState('https://cdn-icons-png.flaticon.com/512/149/149071.png')
  const userSettings = {
    token: token,
    profileImage: profileImage,
    imagesList: imagesList,
    setProfileImage,
    setToken,
    setImagesList
  }

  function TopTabs({navigation}) {
    const [swipeEnabled, setSwipeEnabled] = useState(true);
    return (
      <Top.Navigator
      initialRouteName="List"
      swipeEnabled={swipeEnabled}
  
      screenOptions={{
  
        tabBarActiveTintColor: 'black',
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 15,},
        tabBarItemStyle: { width: 115 },
         tabBarStyle: { backgroundColor: '#DFA13A' },
      }}
      >
        <Top.Screen name="Burger" component={List} />
        <Top.Screen name="Pizza" component={List2} />
        <Top.Screen name="Sandwitch" component={List3} />
        <Top.Screen name="Deal" component={List4} />
      </Top.Navigator>
    );
  }

  function Authstack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
  
  
      </Stack.Navigator>
    )
  }

  function BottomTab({navigation}) {
    return (
      <Tab.Navigator initialRouteName="Home"
      
     
        screenOptions={{
          headerShown: false ,
          tabBarStyle:{ backgroundColor: '#DFA13A', marginBottom:2 }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' size={30} color={focused? 'black' : 'white'} />
  
          )
        }} />
        <Tab.Screen name="About" component={About} options={{
          tabBarIcon: ({focused}) => (
            <IonIcon name='md-today' size={30} color={focused? '#DFA13A' : 'white'}  />
  
          )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='account-circle' size={30} color={focused? '#DFA13A' : 'white'}  />
  
          )
        }} />
      </Tab.Navigator>
    )
  }

  function StackTab({navigation}) {
    return (
      <Stack.Navigator>
            <Stack.Screen name='Home' options={{ headerShown: false }} component={BottomTab} />
            <Stack.Screen name='TopTab' options={{ headerShown: false }} component={TopTabs} />
            <Stack.Screen name='Descreption' options={{ headerShown:false
    
    // headerStyle: { backgroundColor: '#DFA13A'},   
}}  component={Descreption} />
          </Stack.Navigator>
      
  
    );
  }
  return (
    <Provider store={store}>
    <AppContext.Provider value={userSettings}>

    <NavigationContainer>
      <NativeBaseProvider>
        {
          token == null ? (
            <><Authstack></Authstack></>
          ): (
            <Drawer.Navigator screenOptions={{headerShown: false, drawerPosition:"right"}}
      
            drawerContent={(props) => (
              <DrawerContent {...props}  />
            )}
            >
        <Drawer.Screen name="StackScreen"  component={StackTab} />
        
      </Drawer.Navigator>
          )
        }
       
      </NativeBaseProvider>
    </NavigationContainer>
    </AppContext.Provider>
    </Provider>
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
