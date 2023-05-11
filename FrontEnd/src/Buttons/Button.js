import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function Button({ ButtonColor, ButtonLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress = {Press} 
        style={{
            backgroundColor: ButtonColor,
            borderRadius: 10,
            alignItems: 'center',
            width: 300,
            height: 40,
            marginVertical: 10,
            marginHorizontal: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            borderTopRightRadius: 6
        }}>
            <Text style={{ color: textColor, fontSize: 26, fontWeight: 'bold' }}>{ButtonLabel}</Text>

        </TouchableOpacity>


    );
}
