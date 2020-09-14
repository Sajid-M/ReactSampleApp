import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class ProfileActivity extends React.Component {
    


render() {

    const user_name =this.props. navigation.getParam('name', 'NO-User');  
    const age = this.props.navigation.getParam('age', 'some default value');  
    const address = this.props.navigation.getParam('address', 'some default value');  
return (
<View style={styles.container}>
<Text style={styles.headerText}>User Details </Text>

<Text style={styles.caption}>Name:{user_name} </Text>

<Text style={styles.caption}>Age :{age}</Text>

<Text style={styles.caption}>Address :{address} </Text>
<Button
title="Go Back"
onPress={() => this.props.navigation.goBack()}
/>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#F5FCFF"
},
caption:{
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "normal"
},
value:{
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "normal"
},
headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
}
});
export default ProfileActivity;