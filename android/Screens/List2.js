import React, { Component, useContext, useState, useEffect } from 'react'
import { StyleSheet, Image, FlatList } from 'react-native';
import { Container, Text, Heading, Center, View } from "native-base";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AppContext from './Provider/Context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Data = [
  {
    id:1 ,
    price: 700,
    image: require('../Images/p1.webp'),
    title: 'Ranch Burger..',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:2,
    price: 700,
    image: require('../Images/p2.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:3,
    price: 700,
    image: require('../Images/p3.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:4,
    price: 700,
    image: require('../Images/p5.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  }

]


function List() {
  const context = useContext(AppContext);
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Data)
  }, [])



  const Cards = (v,i) => {
    return (
        <View>
          
      <Card style={{
        backgroundColor: 'orange', margin: 10, marginLeft:40, width:300,
        borderRadius: 25, paddingLeft:25, paddingRight:20, 
      }} key={i} >
  
        <Card.Cover style={{ padding: 10, backgroundColor: 'orange', height: 150, width:220, }}
          source={v.image} />
        <Card.Content>
          <Title style={{
            color: 'black', padding: 5, width: 190, textAlign: 'center',
            borderRadius: 20, backgroundColor: 'white'
          }}>{v.title} </Title>
          <Paragraph>{v.descreption}</Paragraph>
        </Card.Content>

      </Card>
      </View>
    )
  }

  return (

    <ScrollView style={{backgroundColor:'black'}}>
          <View style={{flex:1, flexDirection:'row', backgroundColor:'white',  margin:20}}>
                <View style={{flex:0.2}}>
                <Icon name="fast-food" color="black" size={40} />
                </View>
            <View style={{display:'flex', flex:0.8}}>
                <Text style={{color:'brown', fontSize:30, fontWeight:'bold', padding:15}}>Pizza</Text>
            </View>
            </View>
     

      {
        data.map((v,i)=>{
          return(
            Cards(v,i)
          )
        })
      }

    </ScrollView>

  )

}
export default List
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