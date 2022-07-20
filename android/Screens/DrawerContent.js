import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Text,
  Drawer,
  Title,
  TouchableRipple,
  Switch,
  
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/FontAwesome'
import AppContext from './Provider/Context';

function DrawerContent({ ...props }) {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const toggleTheme = () => {
    setisDarkTheme(!isDarkTheme);
 

  };
   const context = useContext(AppContext)

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
      <View>
        <View style={{backgroundColor:'teal', height:200, margin:5}}>
          <View style={{height:120, width:120, borderColor:'#a5c5c3', borderRadius:40, marginLeft:65, marginTop:50,
             borderWidth:3, justifyContent:'center', alignItems:'center'}}>
          {/* <MaterialIcon name="user" color="#035956" size={80} /> */}
          <Image
          source={{uri: context.profileImage}} style={{width: 80,
            height: 80,}}
          />
          </View>
        

        </View>
        <View>
          <DrawerItem
              style={styles.drawerItems}
              icon={({ color, size }) => (
                <Icon name="home-outline" color="#035956" size={20} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              style={styles.drawerItems}
              icon={({ color, size }) => (
                <Icon name="account-outline" color="#035956" size={20} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              style={styles.drawerItems}
             icon={({ color, size }) => (
                <Icon name="bookmark-outline" color="#035956" size={20} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('List');
              }}
            />
        </View>
        <Drawer.Section title ='prefrence'>
           <TouchableRipple onPress={()=>{toggleTheme()}}>
           <View style={{flexDirection:'row',marginStart:10,justifyContent:'space-between', marginEnd:10}}>
           <Text>Dark mode</Text>
           <View pointerEvents='none'>
           <Switch value={isDarkTheme}
            />
         </View>

          </View>

         </TouchableRipple>
      </Drawer.Section>
      </View>
    </DrawerContentScrollView>

   
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerItems: {
    backgroundColor: '#a5c5c3',
    marginTop: 2,
  },
});
