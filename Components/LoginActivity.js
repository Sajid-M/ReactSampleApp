import React from 'react';

import StyleSheet from 'react-native';
import Text from 'react-native';
import TextInput from 'react-native';
import View from 'react-native';
import TouchableOpacity from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { withNavigation } from 'react-navigation';

 export default class LoginActivity extends React.Component {
  
  state={
    email:"",
    password:""
  }

  //  isValidEmail = (text) => {
  //     console.log(text);
  //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (reg.test(text) === false) {
  //       return false;
  //     }
  //     else {
  //     return true;
  //     }
  // }

  // isValisUser =() =>{
    
  //   if(this.isValidEmail(this.state.email))
  //   {
  //     Alert.alert("Success","You have entered valid",)
  //   }else{
  //     Alert.alert("Invalid Email","Enter valid email id",)
  //   }
      

  // }

  // createTwoButtonAlert = () =>
  // Alert.alert(
  //   "Alert Title",
  //   "My Alert Msg",
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") }
  //   ],
  //   { cancelable: false }
  // );


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
       onPress={() => this.props.navigation.navigate('Profile')}  
      // onPress ={() => this.isValisUser()}
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

