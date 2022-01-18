import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';
import Registration from '../CustomTextInput';

export default function BottomView() {
    return (
      <View style={styles.container}>
        <Text style={{color:'black'}}>Sign in</Text>
        <Registration placeholder='Enter name here' />
        <Registration placeholder='Enter email here' />
        <Registration placeholder='Enter password here' secureTextEntry={true}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'red',
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
  