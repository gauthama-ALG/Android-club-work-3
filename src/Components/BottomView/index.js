import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Button,Image,TextInput, PlatformColor} from 'react-native';
import Registration from '../CustomTextInput';

export default function BottomView() {


  const [Input,setInput]=useState(0);
  return(
    <View style={styles.container}>
      <Text style={{fontSize:50,color:'wheat',margin:20}}>Counter</Text>
      <Text style={{fontSize:100 ,color:'wheat',margin:20}}>{Input}</Text>
      <TouchableOpacity onPress={()=>setInput(Input+1)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20 ,color:'white'}}>Increase</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setInput(Input-1)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20,color:'white'}}>Decrease</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setInput(Input-Input)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20,color:'white'}}>Reset</Text>
        </View>
    </TouchableOpacity>
    </View>
      );
  }
  {/*console.log(Input)
    return (
      <View style={styles.container}>
        <Text style={{color:'black'}}>Sign in</Text>
        <Registration placeholder='Enter name here' />
        <Registration placeholder='Enter email here' />
        <Registration placeholder='Enter password here' secureTextEntry={true}/>
    <Registration placeholder='input smth' value={Input}  onChangeText={(val)=>{setInput(val);console.log(Input)}} />*/}
        {/*<TextInput placeholder='input smth' value={Input}  onChangeText={(val)=>{setInput(val);console.log(Input)}} />*/}
        {/*<Button title='Login' onPress={()=>console.log("Pressed login")}></Button>
        <TouchableOpacity onPress={()=>console.log("Pressed Again")}>
        <View style={{backgroundColor:'green',padding:'2%'}}>
          <Text>press me</Text>
        </View>
    </TouchableOpacity>*/}

  
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'orangered',
      alignItems: 'center',
      justifyContent: 'center',
    },
    design1:{
      width:200,
      height:75,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      padding:10,
      borderRadius:100,
      backgroundColor:'coral'
    }
  });
  /*container2:{
    backgroundColor:'blue'
  },
  text1:{
    color:"red"
  },*/
  