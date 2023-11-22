
import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './src/navigator/Navigator';
const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (

      <View style={styles.container}>
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
