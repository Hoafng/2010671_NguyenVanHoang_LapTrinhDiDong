import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Screen01({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={{width:'100%', height:200,  backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}> 
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      </View>
     <View style={{width:150,padding:10}}>
     <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>
      POWER BIKE SHOP
     </Text>
     </View>
     <View >
      <TouchableOpacity style={{width:200,borderRadius:40,backgroundColor:'red',height:40,alignItems:'center',justifyContent:'center'}} onPress={() => navigation.navigate('Screen02')}>
        <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Get started</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
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
