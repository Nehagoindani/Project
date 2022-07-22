import React, { Component, useContext, useState, useEffect } from 'react'
import { StyleSheet, Image, FlatList,TouchableOpacity } from 'react-native';
import { Container, Text, Heading, Center, View } from "native-base";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AppContext from './Provider/Context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Data = [
  {
    id:1 ,
    price: 700,
    image: require('../Images/d1.webp'),
    title: 'Ranch Burger..',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:2,
    price: 700,
    image: require('../Images/d2.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:3,
    price: 700,
    image: require('../Images/d3.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:4,
    price: 700,
    image: require('../Images/d4.webp'),
    title: 'Ranch Burgers',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  }

]


function List4(prop) {
  const context = useContext(AppContext);
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Data)
  }, [])



  const Cards = (v,i) => {
    return (
      <TouchableOpacity  onPress={()=>prop.navigation.navigate('Descreption', {data:v})}>
      <View style={{ flexDirection:'row' ,  alignItems: 'center',
       margin: 10,   paddingLeft:25, borderBottomColor:'#DFA13A', borderBottomWidth:2
   
      }} key={i} >
        <View>
        <Card.Cover style={{ padding: 10,  height: 150, width:150, }}
          source={v.image} />
       
        </View>
        <View>
        <Card.Content>
          <Title style={{
            color: 'black', padding: 5, width: 190, textAlign: 'center'}}>{v.title} </Title>
        
        </Card.Content>
        <Text style={{
            color: 'white', padding: 8, marginLeft:40, width: 120,
             textAlign: 'center', fontSize:17,
             borderRadius:20, backgroundColor:'brown',
             }}>price:  {v.price} </Text>
        </View>
      
  

      </View>
      </TouchableOpacity>
    )
  }

  return (

    <ScrollView >
          <View style={{flex:1, flexDirection:'row', backgroundColor:'white', margin:20}}>
                <View style={{flex:0.2}}>
                <Icon name="fast-food" color="black" size={40} />
                </View>
            <View style={{display:'flex', flex:0.8}}>
                <Text style={{color:'brown', fontSize:30, fontWeight:'bold', padding:15}}>Deals</Text>
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
export default List4
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