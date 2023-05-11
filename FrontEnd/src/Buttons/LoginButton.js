import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function LoginButton({ ButtonColor, ButtonLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress = {Press} 
        style={{
            backgroundColor: ButtonColor,
            borderRadius: 10,
            alignItems: 'center',
            width: 100,
            height: 30,
            marginVertical: -10,
            marginHorizontal: -10,
            paddingTop: 2,

        }}>
            <Text style={{ color: textColor, fontSize: 20, fontWeight: 'bold' }}>{ButtonLabel}</Text>

        </TouchableOpacity>


    );
}