import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function SignupButton({ ButtonColor, ButtonLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress = {Press} 
        style={{
            backgroundColor: ButtonColor,
            borderRadius: 10,
            alignItems: 'center',
            width: 250,
            height: 40,
            marginVertical: 20,
            marginHorizontal: 20,
            paddingTop: 5
        }}>
            <Text style={{ color: textColor, fontSize: 26, fontWeight: 'bold' }}>{ButtonLabel}</Text>

        </TouchableOpacity>


    );
}
