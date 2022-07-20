import React, { useState, useRef, useContext } from 'react'
import { StyleSheet, TouchableOpacity, Image, Button, Platform, PermissionsAndroid } from 'react-native';
import { Container, Text, Heading, Center, View, ScrollView, } from "native-base";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import AppContext from './Provider/Context';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import List2 from './List2';


function Home({ navigation }) {

  const [imageUri, setImageUri] = useState(null);
  const refRBSheet = useRef();

  const context = useContext(AppContext)


  // image picker function
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const openCamer = async c => {
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (c == 'g') {
      setTimeout(() => {
        console.log('hello camera');
        launchImageLibrary({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
          saveToPhotos: true,
        })
          .then(image => {
            if (image.assets) {
              // myContext.setProfile(image.assets[0].uri);
              setImageUri(image.assets[0].uri);;
              context.setProfileImage(image.assets[0].uri)

            }
          })
          .catch(error => { });
      }, 1000);
    } else if (c == 'c') {
      setTimeout(() => {
        if (isCameraPermitted && isStoragePermitted) {
          launchCamera({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
            saveToPhotos: true,
          })
            .then(image => {
              if (image.assets) {
                // myContext.setProfile(image.assets[0].uri);
                setImageUri(image.assets[0].uri);;
                context.setProfileImage(image.assets[0].uri)
              }
            })
            .catch(error => { });
        }
      }, 1000);
    }
  };
  return (

    <View style={{ flex: 1, backgroundColor: '#fcf7f0', paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
      <View style={{ flex: 0.1, flexDirection: 'row', height: 50}}>
        <View style={{ flex: 0.1, margin: 10 }}>
          <Icon name="fast-food" color="black" size={40} />
        </View>
        <View style={{ flex: 0.6, margin: 5 }}>
          <Text style={{
            color: 'black', fontSize: 25, textAlign: 'center'
            , paddingTop: 20, paddingBottom: 10
          }}>kado Burger</Text>
        </View>

      </View>
      <View style={{ flex: 0.175, marginBottom:5 ,  }}>
      <ScrollView horizontal={true} >
       

        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around',margin:10}}>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Burger' })} style={{marginLeft:20,marginRight:20, marginBottom:10}} >
            <Icon name="fast-food" color="brown" size={25} style={styles.icon} />
            <Text style={{color: 'black'}}>Burger</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Pizza' })} style={{marginLeft:20,marginRight:20}} >
            <Icon name="pizza" color="brown" size={25} style={styles.icon} />
            <Text>Pizza</Text>
          </ TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Sandwitch' })} style={{marginLeft:20,marginRight:20}}>
            <Icon name="fast-food" color="brown" size={25} style={styles.icon} />
            <Text>Sandwitch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'List3' })} style={{marginLeft:20,marginRight:20}}>
            <Icon name="fast-food" color="brown" size={25} style={styles.icon} />
            <Text>Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'List3' })} style={{marginLeft:20,marginRight:20}}>
            <Icon name="fast-food" color="brown" size={25} style={styles.icon} />
            <Text>Beverages</Text>
          </TouchableOpacity>



        </View>
      </ScrollView>
      </View>
      <View style={{ flex: 0.25, justifyContent: 'center', flexDirection: 'row', borderWidth: 7, borderColor: 'orange' }}>
        <Swiper autoplay autoplayTimeout={4} showsPagination={false} scrollEnabled={false}>
          <View>
            <Image style={styles.specImg} source={require('../Images/b2.png')} />
          </View>
          <View>
            <Image style={styles.specImg} source={require('../Images/p1.webp')} />
          </View>
          <View>
            <Image style={styles.specImg} source={require('../Images/b3.png')} />
          </View>
        </Swiper>
      </View>
      <View style={{
        flex: 0.45, marginTop: 15, borderTopLeftRadius: 35,
        borderTopRightRadius: 35, paddingLeft: 10, paddingRight: 10
      }}>
        <View style={{ flex: 1 }}>


          <View style={{ flex: 0.1 }}>
            <Text style={{  padding: 5, fontSize: 20, color: 'brown' , fontWeight:'bold'}}>Our Specials</Text>

          </View>

          <View style={{ flex: 0.9,  }}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={{width:160, height:120, display:'flex', justifyContent:'center',
             alignItems:'center', margin:10, backgroundColor:'black'}}>
            <Image style={{height:100, width:100}} source={require('../Images/b1.png')} />
          </View>
          <View style={{width:160, height:120, display:'flex',backgroundColor:'black',
           justifyContent:'center', alignItems:'center',  margin:10}}>
            <Image style={{height:100, width:100}} source={require('../Images/b2.png')} />
          </View>

            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={{width:160, height:120, display:'flex', justifyContent:'center',
             alignItems:'center',  margin:10,backgroundColor:'black'}}>
            <Image style={{height:100, width:100}} source={require('../Images/b3.png')} />
          </View>
          <View style={{width:160, height:120, display:'flex', justifyContent:'center',backgroundColor:'black',
           alignItems:'center',  margin:10}}>
            <Image style={{height:100, width:100}} source={require('../Images/b4.png')} />
          </View>


            </View>
           

          </View>

        </View>
      </View>
    </View>


  )
}

export default Home
const styles = StyleSheet.create({
  View1: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "teal"
  },
  textInput: {
    // marginVertical: 20
    // backgroundColor:'#00205b',
  },
  inp: {
    // backgroundColor:'#000',
    width: '100%',
    alignItems: 'center',
    margin: 5,
    padding: 2,
    borderBottomColor: 'black'
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,


  },
  specImg1: {
    width: '100%',
    height: '100%',
    margin: 5,
    padding: 5,
    borderRadius: 8,
  },
  specImg: {
    width: '100%',
    height: '100%',
    margin: 5,
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'black'
  },
  icon: {
    borderRadius: 40,
    width: 45,
    height: 45,
    borderWidth: 3,
    padding: 10,
    borderColor: 'brown',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-around'
  }

});