import { Text, View, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import { useState } from 'react';

export default function Screen02({navigation}) {
  const [select,setSelect] = useState('All');
  const DATA = [
  {
    id: 'All',
    title: 'All',
  },
  {
    id: 'Roadbike',
    title: 'Roadbike',
  },
  {
    id: 'Mountain',
    title: 'Mountain',
  },
];

const DATA2 = [
  {
    id: 'All',
    title: 'All',
    description:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    price:100
  },
  {
    id: 'Roadbike',
    title: 'Roadbike',
     description:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
     price:100
  },
  {
    id: 'Mountain',
    title: 'Mountain',
     description:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
     price:100
  },
  {
    id: 'Mountain',
    title: 'Mountain',
     description:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
     price:100
  },
  {
    id: 'Mountain',
    title: 'Mountain',
     description:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
     price:100
  },
];
const handleSelect=(item)=>{
  setSelect(item)
}
  return (
    <View style={styles.container}>
    <View style={{width:'100%'}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'red',      justifyContent:'flex-start',paddingBottom:10}}>
      The world's Best Bike
      </Text>
    </View>
      <FlatList
        data={DATA}
        contentContainerStyle={{flexDirection:'row'}}
        renderItem={({item}) => (
          <TouchableOpacity style={[{
            width:70,borderColor:'red',borderWidth:1,margin:10,alignItems:'center',borderRadius:5},(select===item.id)?{backgroundColor:'red'}:null]} onPress={()=>handleSelect(item.id)}>
            <Text>{item.title}</Text>
           
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
        <FlatList
        data={DATA2}
        contentContainerStyle={{}}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity style={{
            width:100,height:150,borderColor:'red',borderWidth:1,margin:10,alignItems:'center',borderRadius:5,}}  onPress={() => navigation.navigate('Screen03', { item })}  >
          <Image style={{width:90,height:100,justifyContent:'center'}} source={require('../assets/snack-icon.png')} />
            <Text>{item.title}</Text>
             <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
   
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  
  }
});
