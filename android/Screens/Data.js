import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Text, Heading, Center, View } from "native-base";
function Data(){
    return(
        
        <Center style={{backgroundColor:'black'}}>
      <Container>
        <Heading>
        HomeScreen
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </Container>
    </Center>
    
    )
}
export default Data
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
  }

});