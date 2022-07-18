import React, { Component, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Container, Text, Heading, Center, NativeBaseProvider, Box, Input, St, Stack, Button, Pressable } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';

function SignUp({ navigation }) {

    const [name, setName] = useState('')
    const [email, setEmai] = useState('')
    const [password, setPassword] = useState('')

    

    return (

        <Box style={styles.View1}>


            <Center bg="white" marginTop={15} borderRadius={25} marginLeft={10}
                marginRight={10} paddingTop={20} paddingBottom={15}  >
                <View style={{ paddingBottom: 15 }}>
                    <Heading size="md" color='teal.600' fontSize={25} >SignUp</Heading>
                </View>




                <View style={styles.inp}>
                    <Input mx="2" placeholder="Username"
                        placeholderTextColor='black'
                        maxWidth="300px"
                        size="md"
                        style={[styles.textInput]}
                        value={name}
                        onChangeText={(name) => setName} />
                </View>
                <View style={styles.inp}>
                    <Input mx="3" placeholder="Email"
                     placeholderTextColor='black'
                      maxWidth="300px"
                      size="md"
                       style={[styles.textInput]}
                        value={email} />
                </View>
                <View style={styles.inp}>
                    <Input mx="3" placeholder="Password"
                    size="md"
                        placeholderTextColor='black' maxWidth="300px" style={[styles.textInput]}
                        value={password} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        onPress={() => navigation.navigate('Home')}
                        style={{ marginTop: 40, width: 200, backgroundColor: 'teal' }}  >SignUp</Button>

                </View>
                <View style={{ margin: 20 , padding:10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text> Already have account? Login</Text>
                    </TouchableOpacity>

                </View>
            </Center>
        </Box>
    )

}

export default SignUp
const styles = StyleSheet.create({
    View1: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "teal"
    },
    textInput: {
      
    },
    inp: {
        // backgroundColor:'#000',
        width: '100%',
        alignItems: 'center',
        margin: 5,
        padding:2,
        borderBottomColor: 'black'
       
    }

});
