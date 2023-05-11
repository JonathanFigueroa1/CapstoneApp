import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Bar from '../Buttons/Bar';
import LoginButton from '../Buttons/LoginButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(null);

  const handleLogin = () => {
    axios.post('/login', { username, password })
      .then(response => {
        // Store the JWT token in local storage
        const token = response.data.token;
        AsyncStorage.setItem('token', token);

        // Redirect the user to the home page
        props.navigation.navigate('Home');
        alert('welcome back', username);
      })
      .catch(error => {
        console.log(error);
        setError('Invalid username or passwor');
      });
  };

  return (
    <>
        <View style={{ alignItems: 'center', width: 420 }}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}>
                Welcome Back
            </Text>
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}>
                Log in to your account{' '}
            </Text>
        </View>
        <View
            style={{
                backgroundColor: 'white',
                height: 720,
                width: 460,
                borderTopLeftRadius: 0,
                paddingTop: 100,
                alignItems: 'center',
                shadowOpacity: 1,
            }}>
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    marginVertical: -90,
                    marginRight: 200,
                }}>
                Name:{' '}
            </Text>
            <Bar
                placeholder="Enter your name"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    marginVertical: -90,
                    marginRight: 170,
                }}>
                Password:{' '}
            </Text>
            <Bar
                placeholder="Enter password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
       
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
    </View>
</>
);
};

const styles = StyleSheet.create({
button: {
backgroundColor: 'darkgreen',
padding: 10,
marginTop: -50,
borderRadius: 20,
width: 200,
alignItems: 'center',
marginRight: 50
},
buttonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
error: {
    color: 'red',
    fontSize: 16,
    marginTop:10,
    textAlign:'center',
}
});

export default Login;
