import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function MenuBut({ ButtonColor, ButtonLabel, textColor, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SideBar')}
        style={{
            backgroundColor: ButtonColor,
            borderRadius: 10,
            alignItems: 'center',
            width: 100,
            marginVertical: -10,
            marginHorizontal: -10,
            paddingTop: 2,

        }}>
            <Text style={{ color: textColor, fontSize: 20, fontWeight: 'bold' }}>{ButtonLabel}</Text>

        </TouchableOpacity>


    );
}
