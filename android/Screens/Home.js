import React, { useState,useRef } from 'react'
import { StyleSheet, TouchableOpacity, Image, Button, Platform, PermissionsAndroid } from 'react-native';
import { Container, Text, Heading, Center, View, } from "native-base";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
function Home() {

  const [imageUri, setImageUri] = useState(null);
  const refRBSheet = useRef();


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
              }
            })
            .catch(error => { });
        }
      }, 1000);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <TouchableOpacity style={{ justifyContent: 'center', margin: 20 }} >
          <Button title='Launch camera'
            onPress={() => openCamer('c')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', margin: 20 }} >
          <Button title='open gallery'
            onPress={() => openCamer('g')}
          />
        </TouchableOpacity>
        {/* <Image
          source={{ uri: imageUri }}
          style={styles.img}
        /> */}

      </RBSheet>
    </View>

    // <Center >
    //   <Container>
    //     <Heading>
    //       HomeScreen
    //       <Text color="emerald.500"> React Ecosystem</Text>
    //     </Heading>
    //     <Text mt="3" fontWeight="medium">
    //       NativeBase is a simple, modular and accessible component library that
    //       gives you building blocks to build you React applications.
    //     </Text>
    //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
    //     <RBSheet
    //       ref={ref => {
    //         this.RBSheet = ref;
    //       }}
    //       height={300}
    //       openDuration={250}
    //       customStyles={{
    //         container: {
    //           justifyContent: "center",
    //           alignItems: "center"
    //         }
    //       }}
    //     >
    //       <TouchableOpacity style={{ justifyContent: 'center', margin: 20 }} >
    //       <Button title='Launch camera'
    //         onPress={() => openCamer('c')}
    //       />
    //     </TouchableOpacity>
    //     <Image
    //       source={{ uri: imageUri }}
    //       style={styles.img}
    //     />

    //     </RBSheet>
    //   </View>


    //     <TouchableOpacity style={{ justifyContent: 'center', margin: 20 }} >
    //       <Button title='Launch camera'
    //         onPress={() => openCamer('c')}
    //       />
    //     </TouchableOpacity>
    //     <Image
    //       source={{ uri: imageUri }}
    //       style={styles.img}
    //     />

    //   </Container>
    // </Center>

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
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,


  }

});