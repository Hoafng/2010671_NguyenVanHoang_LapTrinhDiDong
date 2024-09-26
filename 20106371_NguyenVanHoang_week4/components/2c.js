import { AntDesign } from '@expo/vector-icons';
import React,{useState} from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const YourApp = () => {

  const [lowselected, setLowselected] = useState(false);
  const [upselected, setUpselected] = useState(false);
  const [numselected, setNumselected] = useState(false);
  const [sbselected, setSbselected] = useState(false);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#23235B'
      }}>
        <View style={{alignItems: 'center',marginTop: 40}}>
          <Text style={{color: 'white',fontSize:26,fontWeight:'bold'}}>PASSWORD</Text>
          <Text style={{color: 'white',fontSize:26,fontWeight:'bold'}}>GENERATOR</Text>
       </View>

        <View style={{borderWidth: 1,backgroundColor:'#151537',width:'90%',height:56, top:20
          ,marginLeft:'5%',marginRight:'5%'}}> 
        </View>

        <View style={{top: 88,justifyContent: 'center'}}>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <Text style={{marginLeft:'5%',color:'white',fontSize:22}}>Password lenght</Text>
              <View style={{borderWidth: 1,backgroundColor:'white',width:170,height:36,left: 20}}></View>
          </View>
            
          <View style={{flexDirection: 'row',alignItems: 'center',top:30}}>
            <Text style={{flex:1,marginLeft:'5%',color:'white',fontSize:22}}>Include lower case letters</Text>
            <TouchableOpacity
              onPress={() => setLowselected(!lowselected)}
              style={{
                marginLeft: 10,
                marginRight: 20,
                width: 30,
                height: 30,
                borderWidth: 2,
                borderColor: lowselected ? 'green' : 'gray',
                backgroundColor: lowselected ? 'green' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
            >
            {lowselected ? (
                        <AntDesign name="check" size={20} color="white" />) : null}
           </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',alignItems: 'center',top:60}}>
            <Text style={{flex: 1,marginLeft:'5%',color:'white',fontSize:22}}>Include upcase letters</Text>
            <TouchableOpacity
              onPress={() => setUpselected(!upselected)}
              style={{
                marginLeft: 10,
                marginRight: 20,
                width: 30,
                height: 30,
                borderWidth: 2,
                borderColor: upselected ? 'green' : 'gray',
                backgroundColor: upselected ? 'green' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
            >
            {upselected ? (
                        <AntDesign name="check" size={20} color="white" />) : null}
           </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',alignItems: 'center',top:90}}>
            <Text style={{flex: 1,marginLeft:'5%',color:'white',fontSize:22}}>Include number</Text>
            <TouchableOpacity
              onPress={() => setNumselected(!numselected)}
              style={{
                marginLeft: 10,
                marginRight: 20,
                width: 30,
                height: 30,
                borderWidth: 2,
                borderColor: numselected ? 'green' : 'gray',
                backgroundColor: numselected ? 'green' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
            >
            {numselected ? (
                        <AntDesign name="check" size={20} color="white" />) : null}
           </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',alignItems: 'center',top:120}}>
            <Text style={{flex: 1,marginLeft:'5%',color:'white',fontSize:22}}>Include special symbol</Text>
            <TouchableOpacity
              onPress={() => setSbselected(!sbselected)}
              style={{
                marginLeft: 10,
                marginRight: 20,
                width: 30,
                height: 30,
                borderWidth: 2,
                borderColor: sbselected ? 'green' : 'gray',
                backgroundColor: sbselected ? 'green' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
            >
            {sbselected ? (
                        <AntDesign name="check" size={20} color="white" />) : null}
           </TouchableOpacity>
          </View> 

          <TouchableOpacity style={{top: 150,alignItems:'center', justifyContent:'center',backgroundColor: '#3B3B98',
            marginLeft: '10%',width:'80%',height:68, marginRight: '10%' }}>
            <Text style={{color: 'white',fontSize:22,fontWeight:'bold'}}>GENERATE PASSWORD</Text>
          </TouchableOpacity>

        </View>
    </View>
  );
};

export default YourApp;