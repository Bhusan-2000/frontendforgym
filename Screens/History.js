import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {useEffect} from "react"
import {useNavigation} from '@react-navigation/native';
const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';


function History({route}) {
  const navigation = useNavigation();
  let email = route.params.email;
  let data = []
  useEffect(()=>{
    fetch(`${API_URL}/history/${email}`)
    .then(response => response.json())
    .then(json => {data = json})
  });
  return (
    <View>
      <Text style={{color:'red'}}>{email}</Text>
      <Text style={{fontWeight:'bold',marginLeft:'auto',marginRight:'auto',fontSize:40,marginTop:10}}>My History</Text>
      <Pressable style={{alignItems:'center'}} onPress={()=>navigation.navigate('HomeWorkout',{email}) }><Text style={{color:'red'}}>Back</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
export default History;
