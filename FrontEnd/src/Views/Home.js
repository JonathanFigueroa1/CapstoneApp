import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image , TouchableOpacity, Dimensions } from 'react-native';
import Background from '../Buttons/Button';
import Button from '../Buttons/Button';
import LoginButton from '../Buttons/LoginButton';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Preview:</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>200</Text>
                    <Text style={styles.statLabel}>Total Parkings</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>50</Text>
                    <Text style={styles.statLabel}>Available</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>150</Text>
                    <Text style={styles.statLabel}>Taken</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/Colegio.jpg")} style={styles.image} />
                {/* <Image source={require("../assets/logouni.png")} style={styles.watermark} /> */}
            </View>
            <Button ButtonColor='green' textColor='black' ButtonLabel='Go to Parking Map' Press={() => props.navigation.navigate("ParkingGrid")}></Button>
        </View>
    );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: height * 0.05,
    },
    headerText: {
        fontSize: height * 0.03,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.05,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: height * 0.04,
        fontWeight: 'bold',
        color: 'black',
    },
    statLabel: {
        fontSize: height * 0.015,
        color: 'black',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.9,
    },
    watermark: {
        position: 'absolute',
        opacity: 0.3,
        top: '20%',
        left: '5%',
        width: '90%',
        height: '70%',
        tintColor: 'grey',
    },
});

export default Home;
