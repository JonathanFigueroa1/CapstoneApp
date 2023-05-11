import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const ParkingGrid = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  const columns = [
    {
      id: 'A',
      spots: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
    },
    {
      id: 'B',
      spots: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
    },
    {
      id: 'C',
      spots: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
    },
    {
      id: 'D',
      spots: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
    },
  ];

  const handlePress = (columnIndex, spotIndex) => {
    const updatedColumns = [...columns];
    const updatedSpots = [...updatedColumns[columnIndex].spots];
    const selectedSpot = updatedSpots[spotIndex];

    selectedSpot.selected = !selectedSpot.selected;
    setSelectedSpot(selectedSpot.selected ? selectedSpot : null);

    // If spot is selected, get its coordinates and open Google Maps
    if (selectedSpot.selected) {
      const latitude = 18.217597681837834;
      const longitude = -67.14288145560002;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      Linking.openURL(url);
    }
  };

  const renderSpot = (spot) => {
    const isSelected = spot.selected;
    const backgroundColor = isSelected ? 'red' : 'green';
    const textColor = isSelected ? 'red' : 'black';

    return (
      <TouchableOpacity
        key={spot.id}
        style={[styles.spotContainer, { backgroundColor }]}
        onPress={() => handlePress(spot.columnIndex, spot.spotIndex)}
      >
        <Text style={[styles.spotLabel, { color: textColor }]}>
          Spot {spot.id}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('../assets/Parking.png')} style={styles.backgroundImage}>
      <View style={styles.gridContainer}>
        {columns.map((column, columnIndex) => (
          <View key={columnIndex} style={styles.rowContainer}>
            {column.spots.map((spot, spotIndex) => (
              <View key={spotIndex} style={styles.columnContainer}>
                {renderSpot({...spot, columnIndex, spotIndex})}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 90,
    marginBottom: 400
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 38
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: -20,
    marginLeft: 10
  },
  spotContainer: {
    width: 30,
    height: 20,
    margin: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spotLabel: {
    fontSize: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '110%',
    height: '100%',
    // resizeMode: 'contain',
    marginLeft: -80
  
  },
});



export default ParkingGrid;
