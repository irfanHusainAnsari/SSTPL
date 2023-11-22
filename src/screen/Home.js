import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import fonts from '../common/fonts'

const Home = () => {
// render
  return (
    <View style={styles.container}>
      <Text 
              style={styles.text}
              >Home Screeen</Text>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontFamily:fonts.OptimaBold,
    fontSize:25,
  
    // fontWeight:"bold"
  },
});