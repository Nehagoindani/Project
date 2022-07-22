import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Text,
  Drawer,
  Title,
  TouchableRipple,
  Switch,
  
} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/FontAwesome'
import AppContext from './Provider/Context';
import {useSelector,useDispatch} from 'react-redux';
import { Heading } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { decrement } from '../Redux/Reducer';


function DrawerContent({navigation}) {
  const dispatch = useDispatch()
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const toggleTheme = () => {
    setisDarkTheme(!isDarkTheme);
 

  };
   const context = useContext(AppContext)

   const counter = useSelector(state => state.counter)
   const data = useSelector(dState => dState.data)
 console.log(data)
  return (
  
    <View style={{flex:1, alignItems:'center', margin:30 }}>
      <View style={{backgroundColor:'DFA13A'}}>
      <Heading size="md" >Cart</Heading>

      </View>
     
     
      <View style={{backgroundColor:'DFA13A', justifyContent:'space-around' , marginTop:40}}>
      <Text style={{color:'black', fontSize:20, padding:5}}> Item:  {data?.item} </Text>
      <Text style={{color:'red', fontSize:20, padding:5}}> Price:  {data?.price} </Text>
      <Text style={{color:'black', fontSize:20, padding:5}}> no of items:  {counter}  </Text>
      <View style={{flexDirection:'row', justifyContent:'space-around', marginLeft:50}}>
      {
        counter >= 1 ? 

        <TouchableOpacity onPress={() => {dispatch(decrement())}}>
        <Icon name="minuscircleo" style={{margin:10, }} color="#DFA13A" size={20} />

    
      </TouchableOpacity>: null 
      }
      <TouchableOpacity onPress={() => {dispatch(decrement())}}>
   

        <Icon name="pluscircleo" style={{margin:10,}} color="#DFA13A" size={20} />

    
      </TouchableOpacity>
     
      </View>
      

      </View>
     

    </View>
    // <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
    //   <View>
    //     <View style={{backgroundColor:'teal', height:200, margin:5}}>
    //       <View style={{height:120, width:120, borderColor:'#a5c5c3', borderRadius:40, marginLeft:65, marginTop:50,
    //          borderWidth:3, justifyContent:'center', alignItems:'center'}}>
    //       {/* <MaterialIcon name="user" color="#035956" size={80} /> */}
    //       <Image
    //       source={{uri: context.profileImage}} style={{width: 80,
    //         height: 80,}}
    //       />
    //       </View>
        

    //     </View>
    //     <View>
    //       <DrawerItem
    //           style={styles.drawerItems}
    //           icon={({ color, size }) => (
    //             <Icon name="home-outline" color="#035956" size={20} />
    //           )}
    //           label="Home"
    //           onPress={() => {
    //             props.navigation.navigate('Home');
    //           }}
    //         />
    //         <DrawerItem
    //           style={styles.drawerItems}
    //           icon={({ color, size }) => (
    //             <Icon name="account-outline" color="#035956" size={20} />
    //           )}
    //           label="Profile"
    //           onPress={() => {
    //             props.navigation.navigate('Profile');
    //           }}
    //         />
    //         <DrawerItem
    //           style={styles.drawerItems}
    //          icon={({ color, size }) => (
    //             <Icon name="bookmark-outline" color="#035956" size={20} />
    //           )}
    //           label="Bookmarks"
    //           onPress={() => {
    //             props.navigation.navigate('List');
    //           }}
    //         />
    //     </View>
    //     <Drawer.Section title ='prefrence'>
    //        <TouchableRipple onPress={()=>{toggleTheme()}}>
    //        <View style={{flexDirection:'row',marginStart:10,justifyContent:'space-between', marginEnd:10}}>
    //        <Text>Dark mode</Text>
    //        <View pointerEvents='none'>
    //        <Switch value={isDarkTheme}
    //         />
    //      </View>

    //       </View>

    //      </TouchableRipple>
    //   </Drawer.Section>
    //   </View>
    // </DrawerContentScrollView>

   
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerItems: {
    backgroundColor: '#a5c5c3',
    marginTop: 2,
  },
});
