import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <View styles = {styles.container}>
        <MapView styles = {styles.map}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '-100%',
        height: '-100%',
    }
})

export default Map;