
import React from 'react';
import {TextInput,View,Text,TouchableOpacity,StyleSheet, Alert} from 'react-native';




validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };
 

export default class LoginActivity extends React.Component {
   
   
    state={
      email:"",
      password:""
    }


    handleClick = (email) => {
        Alert.alert("Alert"+{email})
    }

    constructor(props) { 
        super(props); 
        this.state = { 
          email: '',
          password: '', 
        
        }; 
    } 
    
    const [text, setText] = useState('');
  

    render(){
      
        return (
           
          <View style={styles.container}>
          <Text style={styles.logo}>MyAPP</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({email:text})}/>
              
            
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}
             
              />
          </View>
          
          <TouchableOpacity style={styles.loginBtn}
           //onPress={() => this.props.navigation.navigate('Profile')}  
           onPress ={() => this.handleClick(this.state.email)}
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