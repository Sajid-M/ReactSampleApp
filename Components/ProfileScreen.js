import React, { Component } from 'react'; 
import { View, Text, Button ,StyleSheet,Image} from 'react-native';  
import { FlatList } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';


const DATA = [
    {
      id: '1',
      name: 'Dave',
      age: '22',
      address: 'address1'

    },
    {
      id: '2',
      name: 'John',
      age:'25',
      address:'address2'
    },
    {
      id: '3',
      name: 'Rose',
      age:'26',
      address:'address3'
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image style ={styles.tinyLogo} source={require('../img/user.png')} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const cb = () => {
    this.props.navigation.navigate('User');
  }

   const renderItem = ({ item }) => (
       <TouchableOpacity
       onPress={() => this.cb()}>
    
        <Item title={item.name} />
      </TouchableOpacity>
  );


export default  class ProfileScreen extends React.Component {  

    constructor(props)
    {
        super(props);
    }
    state={
        users: DATA
    }

    render() {  
      
        return (  
            <View style={{ flex: 1, flexDirection:'column', alignItems: "stretch", justifyContent: "flex-start" }}>  
        
              
                <FlatList
                   
                    data={this.state.users}
                    //renderItem={renderItem}
                    renderItem={({item}) => 
            //  <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}> 
            //      <Text style={styles.title}>{item.name}</Text> 
            //  </TouchableOpacity>
             
             <TouchableOpacity
       onPress={() => this.props.navigation.navigate('User',{
           'name':item.name,
           'age':item.age,
           'address':item.address
       })}>
    
        <Item title={item.name} />
      </TouchableOpacity>
            }

             
                />

               
            </View>  
    );  
    }  
}  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:10,
    },
    item: {
      flex:1,
      flexDirection:'row',
      backgroundColor: '#003f5c',
      padding: 40,
      borderRadius:25,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    title: {
      fontSize: 32,
      color:"white"
    },tinyLogo: {
      width: 50,
      height: 50,
      marginRight:20,
     
    },
    logo: {
      width: 66,
      height: 58,
      margin:20,
      marginHorizontal:10
    },
  });

