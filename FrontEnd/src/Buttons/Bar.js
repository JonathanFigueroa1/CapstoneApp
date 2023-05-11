import React from 'react';
import { TextInput } from 'react-native';

const Bar = (props) => {
    return (
        <TextInput {...props} style={{
            color: 'darkgreen',
            paddingHorizontal: 10,
            width: '60%',
            height: '10%',
            borderRadius: 30,
            backgroundColor: 'rgb(220,220,220)',
            marginVertical: 90,
            marginRight: 50
        }} placeholderTextColor= 'darkgreen'>

        </TextInput>
    )
}

export default Bar;