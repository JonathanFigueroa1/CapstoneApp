import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Presentation from './src/Views/Presentation';
import Signup from './src/Views/Signup';
import Login from './src/Views/Login';
import HeaderLog from './src/Buttons/HeaderLog';
import Home from './src/Views/Home';
import MapScreen from './src/Views/MapScreen';
import ParkingGrid from './src/Views/ParkingGrid';
import Map from './src/Views/Map';

const Stack = createNativeStackNavigator();

function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  //to create the side menu 
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
//render the application 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Presentation"
          component={Presentation}
          options={({ navigation }) => ({
            title: 'Welcome',
            headerTitleAlign:'center',
            headerRight: () => (
              <HeaderLog
                ButtonColor="white"
                textColor="black"
                ButtonLabel="Log In"
                navigation={navigation}
              />
            ),
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          })}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Create Account',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          }}
        />
         <Stack.Screen
          name="ParkingGrid"
          component={ParkingGrid}
          options={{
            title: 'ParkingMap',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            title: 'Map',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Parking',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Home',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: 'darkgreen',
              height: windowHeight / 10,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={[styles.menuButton,{ marginRight: windowWidth / 20 }] }>Menu</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => { alert("You have been log out"), navigation.navigate('Presentation') }}>
                <Text style={[styles.menuButton, { marginRight: windowWidth / 20 }]}>Log Out</Text>
              </TouchableOpacity>
            ),
            
          })}
        />    
      </Stack.Navigator>
      <View style={showMenu ? styles.overlay : styles.hide}>
        <View style={[styles.menu, { width: windowWidth / 2 }]}>
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); closeMenu() }}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('MapScreen'); closeMenu() }}>
            <Text style={styles.menuItem}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Presentation}>
            <Text style={styles.menuItem}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeMenu}>
            <Text style={styles.menuItem}>Close Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  hide: {
    display: 'none',
  },
  menu: {
    backgroundColor: 'white',
    width: 200,
    height: '100%',
    paddingTop: 50,
    paddingLeft: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default App;
