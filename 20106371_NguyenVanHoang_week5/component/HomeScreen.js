import * as React from 'react';
import { Text, TextInput, View, Button,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useEffect ,useState} from 'react';
import StarRating from 'react-native-star-rating-widget';




export default function HomeScreen({ navigation, route }) {
  const data = route.params;
    const [image, setImage] = useState('blue');
    const imageMap = {
        'white': require('../assets/vs_white.png'),
        'red': require('../assets/vs_red.png'),
        'black': require('../assets/vs_black.png'),
        'blue': require('../assets/vs_blue.png')
    };
   const [rating, setRating] = useState(0);
   const phone = {
    name:"Điện thoại Vsmart Joy 3 - Hàng chính hảng",
    rate:"0",
    view:"828",
    price:"1790000",
    priceDiscout:'1790000'
  }
  useEffect(() => {
    if (data) {
      ColorSelection(data.image)
    }
  });

  const ColorSelection = (color) => {
        setImage(color);
    };

  return (
    <View style={styles.container}>
    <View style={{alignItems:'center'}}>
    <Image
        style={styles.img}
         source={imageMap[image]} 
    />
    </View>
       
     <View style={{alignItems:'center'}}>
      <Text>
        {phone.name}
      </Text>
      </View>
      <View style={styles.rate}>
        <StarRating
        rating={rating}
        onChange={setRating}
        starSize='23'
      />
      <Text>(Xem {phone.view} đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.txtPrice}>{phone.priceDiscout}</Text>    
         <Text style={styles.txtPricediscount}>{phone.price}</Text>    
      </View>
      <View style={{padding:5}}>
        <Text>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>
      <View style={{alignItems:'center'}}>
       <TouchableOpacity style={styles.ChoseColor} onPress={()=>navigation.navigate('Screen1')}>
        <Text>Chọn màu</Text>
      </TouchableOpacity>
    </View>
     
       
      <Button
        color="red"
        title="Chọn mua"
      />
    </View>
    
  );
  
}
const styles = StyleSheet.create({
  container:{flex: 1,
  },
  img:{
    margin:10,
    height:250,
    width:200,
    alignItems: 'center', 
    justifyContent:'center'
  },
  rate:{
    height:30,
    alignItems:'center',
    flexDirection:'row',
  },
  price:{
     flexDirection:'row',
     justifyContent:'flex-start',
     paddingLeft:10,
  },
  txtPrice:{
    fontSize:16,
    fontWeight:'bold',
    marginRight:20,
    marginLeft:20
  },
  txtPricediscount:{
     fontSize:16,
    marginRight:20,
    marginLeft:20,
    textDecorationLine:'line-through'
  },
  ChoseColor:{
    width:250,
    height:40,
    borderWidth:2,
    borderColor:"black",
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:10
  }
});