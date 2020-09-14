import React from 'react';
import { StyleSheet, Text, TextInput,View,TouchableOpacity,  Button, TouchableNativeFeedback } from 'react-native';
import { Alert } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
        backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        };

  state={
    email:"",
    password:""
  }
  createTwoButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );


  render(){
    return (
     
      <View style={styles.container}>
      <Text style={styles.logo}>MyAPP</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          />
        
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>
      </View>
      
      <TouchableOpacity style={styles.loginBtn}
            >
        <Text style={styles.loginText}>LOGIN</Text>
            
      </TouchableOpacity>
      

    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:50
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});