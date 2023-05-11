import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideBar = (props) => {
    const handleSelectOption = () => {
        props.closeMenu();
        // Do something else here, like navigate to another screen
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {props.navigation.navigate('Home'); props.closeMenu}}>
        <Text style={styles.menuItem}>Home</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => {props.navigation.navigate('Settings')}}>
        <Text style={styles.menuItem}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}}>
        <Text style={styles.menuItem}>Profile</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={props.closeMenu}>
        <Text style={styles.menuItem}>Close Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default SideBar;
