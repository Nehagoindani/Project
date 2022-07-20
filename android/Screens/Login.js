import React, { Component, useState, useContext } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Container, Text, Heading, Center, NativeBaseProvider, Box, Input, St, Stack, Button, Pressable } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppContext from './Provider/Context';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(AppContext)

    const submit = () => {
        if (email == '' && password == '') {
            alert('please enter emial/password')
        }
        else if (email == 'neha' && password == 'neha123') {
            navigation.navigate('Home')
        }
        else {
            alert('email/password invalid')
        }
    }
    const Login = () => {
        context.setToken('jdd')
    }

    return (

        <Box style={styles.View1}>


            <Center bg="white" marginTop={15} borderRadius={25} marginLeft={10}
                marginRight={10} paddingTop={20} paddingBottom={17}  >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center', margin: 15, paddingBottom: 20
                }}>
                    <Icon name="user" color="orange" size={60} />
                </View>
                <View style={{ paddingBottom: 15 }}>
                    <Heading size="md" color='orange' fontSize={25} style={{color:'orange', fontSize:30}} >Login</Heading>
                </View>

                <View style={styles.inp}>
                    <Input mx="3" size="md" placeholder="Email" placeholderTextColor='black' maxWidth="300px" style={[styles.textInput]}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inp}>
                    <Input mx="3" placeholder="Password"
                        secureTextEntry={true}
                        size="md"
                        placeholderTextColor='black' maxWidth="300px" style={[styles.textInput]}
                        onChangeText={(password) => setPassword(password)} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Login()} >
                        
                        <Button
                        color='red'
                        fontSize={20}
       

                            style={{ marginTop: 40, width: 200, backgroundColor: 'orange'}}  >Login</Button>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: 'orange' }}> Don't have account? SignUp </Text>
                    </TouchableOpacity>

                </View>
            </Center>
        </Box>
    )

}

export default Login
const styles = StyleSheet.create({
    View1: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "white"
    },
    textInput: {
        borderBottomColor:'orange',
        borderBottomWidth:2
      
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
