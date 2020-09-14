import React, { Component } from 'react'; 
import { View, Text, Button } from 'react-native';  

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FirstScreen from './Components/FirstScreen';
import ProfileScreen from './Components/ProfileScreen';
import ProfileActivity from './Components/ProfileActivity';

  
const AppNavigator = createStackNavigator(  
    {  
     
        Login:FirstScreen,
        Profile: ProfileScreen,
        User :ProfileActivity
    },  
    {  
        initialRouteName: "Login"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  