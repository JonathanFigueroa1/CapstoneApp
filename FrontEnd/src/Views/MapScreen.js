import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';

const MapScreen = () => {
  const handleOpenMaps = () => {
    const url = "https://www.google.com/maps";
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Cannot open Maps app");
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/ParkingSatE.png')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <Text style={styles.buttonText}>spot1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <Text style={styles.buttonText}>spot2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <Text style={styles.buttonText}>spot3</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', bottom: 30, color: 'green', fontSize: 30 }}>Choose your spot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginLeft: 300
  },
  image: {
    width: 450,
    height: 700,
    // resizeMode: 'contain',
    marginRight: 320,
    marginTop: 200


  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    bottom: 500,
    left: 20

  },
  buttonText: {
    color: 'white',
  },
});

export default MapScreen;
