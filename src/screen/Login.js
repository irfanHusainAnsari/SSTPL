import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { View, StyleSheet, TextInput, Button, Alert, TouchableOpacity,Text,Image } from 'react-native';
import fonts from '../common/fonts';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      
        props.navigation.navigate("Home")
    } else {
      Alert.alert('Error', 'Please enter valid email and password.');
    }
  };
// render
  return (
    <View style={styles.container}>
      <View style={{marginBottom:20,alignSelf:"center"}}>
        <Image source={require("../assets/images/logo.png")}  style={styles.tinyLogo}/>
      </View>
      <View  style={styles.input}>
      <TextInput
        style={{marginHorizontal:12}}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      </View>
      <View  style={styles.input}>
      <TextInput
        style={{marginHorizontal:12}}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      </View>
      
    <TouchableOpacity style={{backgroundColor:"#058696",height:45,borderRadius:10}} onPress={handleLogin}>
     <View style={{flex:1,alignSelf:"center",justifyContent:"center"}}>
      <Text style={{fontFamily:fonts.OptimaBold,color:"#ffffff",fontSize:18}}>LOGIN</Text>
     </View>
     </TouchableOpacity>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:"#58b3bf"
  },
  input: {
    height: 45,
    borderColor: '#058696',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius:10,
    backgroundColor:"hsl(0,0%, 100%)"
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});