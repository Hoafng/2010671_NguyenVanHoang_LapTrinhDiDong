import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange'
      }}>

      <View style={{flex: 1, marginLeft: 30,marginTop: 70}}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>LOGIN</Text>

      </View>
      
      <View style={{flex: 1}}>
          <TextInput left={<TextInput.Icon icon="account"/>}placeholder='Name' style={{margin: 15}} ></TextInput>
          <TextInput left={<TextInput.Icon icon="lock"/>} placeholder='Password' style={{margin: 15}} right={<TextInput.Icon icon="eye"/>}></TextInput>

      </View>

      <View style={{flex: 1,marginTop: 60}}>
        <TouchableOpacity style={{backgroundColor: 'black',alignItems: 'center',width: '90%',height: 50,
          margin: 15,justifyContent: 'center'}}>
             <Text style={{color: 'white',fontSize:24}}>LOGIN</Text>
        </TouchableOpacity>
        </View>

      <View style={{flex: 1,alignItems:'center'}}>
            <TouchableOpacity>
              <Text style={{fontWeight:'bold',fontSize: 16}}>Forgot your password?</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;