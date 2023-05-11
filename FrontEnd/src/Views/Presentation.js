import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, Dimensions } from 'react-native';
import Background from '../Buttons/Button';
import Button from '../Buttons/Button';
import LoginButton from '../Buttons/LoginButton';

const { width, height } = Dimensions.get('window');

const Presentation = (props) => {
    return (
        <><View>
            <ImageBackground
                source={require("../assets/Colegio2.jpg")} style={{ height: height * 0.25 }}></ImageBackground>
        </View>
            <View style={{ marginHorizontal: width * 0.1, marginVertical: -height * 0.28 }}>
                <Text style={{ color: 'white', fontSize: width * 0.07, bottom: -height * 0.04 }}>Welcome to Parkwise</Text>
                <Text style={{
                    color: 'black',
                    fontSize: width * 0.08,
                    paddingBottom: height * 0.02,
                    bottom: height * 0.03,
                    paddingTop: height * 0.3
                }}>Find your parking spot</Text>
                <Button ButtonColor='green' textColor='black' ButtonLabel='Create Free Account' Press = {() => props.navigation.navigate("Signup")}></Button>
                <Button ButtonColor='white' textColor='black' ButtonLabel='Continue As Guest' Press = {() => props.navigation.navigate("Home")}/>
                
                <Image
                    source={require("../assets/logouni.png")} style={styles.watermark}/>
                    
            </View></>


    );
}

const styles = StyleSheet.create({
    watermark:{
        position: 'absolute',
        opacity: 0.3,
        top: '110%',
        left: '-40%',
        width: '93%',
        height: '70%',
        tintColor: 'grey'
    }
})

export default Presentation;
