import React, { Component, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Container, Text, Heading, Center, NativeBaseProvider, Box, Input, St, Stack, Button, Pressable } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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


    return (
<Text>
    hgjhdf
</Text>
        // <Box style={styles.View1}>


        //     <Center bg="white" marginTop={15} borderRadius={25} marginLeft={10}
        //         marginRight={10} paddingTop={20} paddingBottom={17}  >
        //         <View style={{ paddingBottom: 15 }}>
        //             <Heading size="md" color='teal.600' fontSize={25} >Login</Heading>
        //         </View>

        //         <View style={styles.inp}>
        //             <Input mx="3" size="md" placeholder="Email" placeholderTextColor='black' maxWidth="300px" style={[styles.textInput]}
        //                 onChangeText={(email) => setEmail(email)}
        //             />
        //         </View>
        //         <View style={styles.inp}>
        //             <Input mx="3" placeholder="Password"
        //             secureTextEntry= {true}
        //                 size="md"
        //                 placeholderTextColor='black' maxWidth="300px" style={[styles.textInput]}
        //                 onChangeText={(password) => setPassword(password)} />
        //         </View>

        //         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        //             <TouchableOpacity onPress={navigation.navigate('Home')}>
        //                 <Button

        //                     style={{ marginTop: 40, width: 200, backgroundColor: 'teal' }}  >Login</Button>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={{ margin: 30 }}>
        //             <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        //                 <Text> Don't have account? SignUp </Text>
        //             </TouchableOpacity>

        //         </View>
        //     </Center>
        // </Box>
    )

}

export default Login
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
