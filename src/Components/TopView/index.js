import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';
import Registration from '../CustomTextInput';

export default function TopView() {
  let text="hello"

    return (
      <View style={styles.container}>
        <Text style={{color:'grey'}}>{text}</Text>
        <Image source={{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }} 
        style={{width:200,height:200}}
        />
        <Registration placeholder='input in top view'></Registration>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2:{
      backgroundColor:'blue'
    },
    text1:{
      color:"red"
    }
  });
  