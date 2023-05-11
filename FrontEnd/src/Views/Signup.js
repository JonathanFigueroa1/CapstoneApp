import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Bar from '../Buttons/Bar';
import axios from 'axios';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        try {
            const response = await axios.post('http://192.168.0.6/add-user', {
              username,
              email,
              password,
            });
          
            if (response.status === 200) {
              alert('your account have been created, you can now login');
              props.navigation.navigate('Presentation');
            } else {
              alert(response.data.message);
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
          }
          
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
                    Create New Account
                </Text>
                <Text
                    style={{
                        color: 'darkgreen',
                        fontSize: 19,
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}>
                    Enter the information below{' '}
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
                        marginRight: 200,
                    }}>
                    Email:{' '}
                </Text>
                <Bar
                    placeholder="Enter your UPR email address"
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
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
                <Text
                    style={{
                        color: 'darkgreen',
                        fontSize: 19,
                        fontWeight: 'bold',
                        paddingVertical: 10,
                        marginVertical: -90,
                        marginRight: 100,
                    }}> Confirm Password:{' '}
            </Text>
            <Bar
                placeholder="Confirm password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
            >
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </>
);
};

const styles = StyleSheet.create({
  button: {
  backgroundColor: 'darkgreen',
  padding: 10,
  marginTop: -40,
  borderRadius: 20,
  width: 200,
  alignItems: 'center',
  marginRight: 50,
  },
  buttonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  },
  });
  
  export default Signup;
