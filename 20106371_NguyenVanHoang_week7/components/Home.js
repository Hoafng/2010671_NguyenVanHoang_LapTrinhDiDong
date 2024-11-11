import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AntDesign} from '@expo/vector-icons'
import {TextInput} from 'react-native-paper'

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'purple',fontWeight:'bold',fontSize:18}}>MANAGE YOUR</Text>
      <Text style={{color:'purple',fontWeight:'bold',fontSize:18}}>TASK</Text>
      <TextInput style={{width: 283,height: 48,marginTop: 10}} placeholder ='Enter your name'
      left={<TextInput.Icon icon="mail"/>}></TextInput>
      <TouchableOpacity style={{backgroundColor: '#00BDD6',width: 190,height: 48,marginTop: '10%',borderRadius: 10,color:'white',fontSize: 18,alignItems:'center',justifyContent:'center', flexDirection:'row'}}>GET STARTED
        <AntDesign name='arrowright' style={{marginLeft:'2%'}} size={18} color='white'></AntDesign>
      </TouchableOpacity>
    </View>
  );
}
export default Home;