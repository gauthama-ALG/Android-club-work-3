import React from 'react';
import {TextInput} from 'react-native';

export default function Registration(props){

    return(
        <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} style={{borderWidth:1 , borderColor:'black',margin:30}}></TextInput>
        )
}