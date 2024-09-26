import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const Screen1 = () => {
    const [image, setImage] = useState('blue');
    const navigation = useNavigation();
    const translate = {
      'white': 'Trắng',
        'red': 'Đỏ',
        'black': 'Đen',
        'blue':'Xanh',
    }

    const imageMap = {
        'white': require('../assets/vs_white.png'),
        'red': require('../assets/vs_red.png'),
        'black': require('../assets/vs_black.png'),
        'blue': require('../assets/vs_blue.png')
    };

    const handleColorSelection = (color) => {
        setImage(color);
    };

    return (
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>            
                    <Image
                        style={{ width: 100, height: 100, resizeMode: 'contain' ,margin:10}}
                        source={imageMap[image]} 
                    />              
                <View style={{ width: '60%' ,padding:10}}>
                    <Text style={{ fontSize: 14 }}>
                        Điện Thoại Vsmart Joy 3
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                        Hàng chính hãng
                    </Text>
                     <Text style={{ fontSize: 14 }}>Màu : {translate[image]}</Text>
                      <Text style={{ fontSize: 14 }}>
                       Cung cấp bởi Tiki Trading
                    </Text>
                     <Text style={{ fontSize: 14, fontWeight: '500' }}>
                        1790000
                    </Text>
                </View>
            </View>

            <View style={{  backgroundColor: 'lightgray', padding: 10 }}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    {['white', 'red', 'black', 'blue'].map((color, index) => (
                        <Pressable key={index} onPress={() => handleColorSelection(color)}>
                            <View style={{ height: 60, width: 60, backgroundColor: color }} />
                        </Pressable>
                    ))}
                </View>
                <Pressable onPress={() => navigation.navigate("Home", { image })} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 20 }}>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', color: '#fff', fontWeight: '600', fontSize: 16 }}>Xong</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Screen1;
