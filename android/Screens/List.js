import React, { Component, useContext, useState, useEffect } from 'react'
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Text, Heading, Center, View } from "native-base";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AppContext from './Provider/Context';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Data = [
  {
    id:1 ,
    price: 849.00,
    image: require('../Images/b1.png'),
    title: 'The Doppler',
    descreption: 'Double crispy fried chicken topped with cheese mayo chilli garlic sauce and lettuce in soft-n-fresh'
  },
  {
    id:2,
    price: 699,
    image: require('../Images/b2.webp'),
    title: 'Big Bang',
    descreption: 'Smashed beef topped with pepperonis, crispy onion rings, jalapeños, lettuce, cheese, fiery hot and Lab'
  },
  {
    id:3,
    price:  1499,
    image: require('../Images/b3.png'),
    title: 'Loaded Fries',
    descreption: '3 Spicy Crispy Chicken Burgers and 3 Drinks'
  },
  {
    id:4,
    price: 1499,
    image: require('../Images/b4.webp'),
    title: 'Quadra Reloaded',
    descreption: '4 smashed beef patties with melted cheese topped with crispy onion rings, grilled mushrooms, smoke and BBQ sauces in soft-n-fresh Potato Buns.3 Spicy Crispy Chicken Burgers and 3 Drinks'
  }

]


function List(prop) {
  const context = useContext(AppContext);
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Data)
  }, [])



  const Cards =(v,i) => {
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
        <View style={{flex:1, flexDirection:'row', margin:10}}>
                <View style={{flex:0.2}}>
                <Icon name="fast-food" color="black" size={40} />
                </View>
            <View style={{display:'flex', flex:0.8}}>
                <Text style={{color:'brown', fontSize:30, fontWeight:'bold', padding:15}}>Burgers</Text>
            </View>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {
        data.map((v,i)=>{
          return(
            Cards(v,i)
          )
        })
      }

            </View>
     
     

     
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