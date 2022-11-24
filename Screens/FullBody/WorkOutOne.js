import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function WorkOutOne({route}){
  const navigation = useNavigation();
  let email = route.params.email;
 

  


  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{height: 200, width: '100%'}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEM-6gDUO7g1cdrNhBaqk_0nwxy6ILlIqsQ&usqp=CAU',
        }}></Image>
      <Text style={{fontWeight:'bold',fontSize:30,bottom:40,backgroundColor:'white'}}>FULL BODY WORKOUT</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius:10
          
        }}
        >
          <Text style={{fontSize:18}}>JUMPING JACKS</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius:10
        }}
        >
          <Text style={{fontSize:18}}>INCLINE PUSHUPS</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius:10
        }}
        >
          <Text style={{fontSize:18}}>WIDE ARM PUSHUPS</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius:10
        }}
        >
          <Text style={{fontSize:18}}>COBRA STRETCH</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius:10
        }}
        >
          <Text style={{fontSize:18}}>CHEST STRETCH</Text>

        </TouchableOpacity>

        <Pressable  onPress={()=>navigation.navigate("FullBodyOne",{email})} style={{
           alignItems: 'center',
           justifyContent: 'center',
           marginTop: 40,
           height: 70,
           width: 150,
           backgroundColor:'#84cbf3',
           borderRadius:10

        }}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>KICK OFF</Text>
        </Pressable>

      
      
    </View>
  );
};

export default WorkOutOne;

const styles = StyleSheet.create({});
