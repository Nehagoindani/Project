import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { increment } from '../Redux/Reducer';
import { decrement } from '../Redux/Reducer';
import { reset } from '../Redux/Reducer';
import {useSelector,useDispatch} from 'react-redux';
function Descreption({ route }) {
    const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)
    const image = route.params.data.image
    const price = route.params.data.price
    const title = route.params.data.title
    const descreption = route.params.data.descreption

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.4, backgroundColor: '#DFA13A', borderBottomLeftRadius: 80 }}>
                <Text style={{
                    color: 'white', padding: 30, width: 280, textAlign: 'center', fontSize: 30

                }}>{title}</Text>

                <Image style={{
                    padding: 10, height: 190, width: 190, justifyContent: 'center',
                    marginLeft: 90, alignItems: 'center'
                }}
                    source={image} />

            </View>
            <View style={{ flex: 0.6 }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-evenly', margin: 10
                }}>
                    <View >

                        <Title style={{
                            color: 'black', padding: 10, width: 190, textAlign: 'center',
                        }}>{title} </Title>

                    </View>
                    <View >
                        <Text style={{ color: 'red', padding: 20, fontSize: 20 }}>{price}Rs </Text>

                    </View>
                </View>
                <Title style={{
                    color: 'black', padding: 10, width: 190, textAlign: 'center'
                }}>Descreption</Title>
                {/* <Text>Counter: {counter}</Text> */}
                <Text style={{ paddingLeft: 20, paddingRight: 20 }}>{descreption}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 35 }}>
                    <View style={{ flex: 0.5, margin: 10 }}>
                        <Button color='#DFA13A' title='Add to cart' onPress={() => {dispatch(increment(title, price)), console.log(counter);}} style={styles.btn} />
                    </View>
                    <View style={{ flex: 0.5, margin: 10 }}>
                        <Button color='#DFA13A' title='Buy now' style={styles.btn} />
                    </View>

                </View>



            </View>
        </View>

    )
}
export default Descreption
const styles = StyleSheet.create({
    btn: {
        margin: 10
    },
})
