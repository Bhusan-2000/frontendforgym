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

function WorkOutTwo({route}) {
  const navigation = useNavigation();
  let email = route.params.email;

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{height: 200, width: '100%'}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NHvoutGn-Vr_uwVbOOtezhENvx9jhV6pfQ&usqp=CAU',
        }}></Image>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          bottom: 40,
          backgroundColor: 'white',
        }}>
        ABS BEGINNER
      </Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>JUMPING JACKS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>MOUNTAIN CLIMBERS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>HEEL TOUCH</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>PLANK</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          height: 50,
          width: 250,
          backgroundColor: 'grey',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18}}>LEG RAISES</Text>
      </TouchableOpacity>
      <View>
      <Pressable 
        onPress={()=>navigation.navigate('AbsBeginner',{email})}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          height: 70,
          width: 150,
          backgroundColor: '#84cbf3',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>KICK OFF</Text>
      </Pressable>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});
export default WorkOutTwo;

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   SafeAreaView,
//   TouchableOpacity,
//   Button,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// const WorkOutTwo = ({ navigation }) => {
//   const DATA = [
//     {
//       id: '1',
//       title: 'Jumping Jacks',
//     },
//     {
//       id: '2',
//       title: 'Mountain Climbers',
//     },
//     {
//       id: '3',
//       title: 'Heel Touch',
//     },
//     {
//       id: '4',
//       title: 'Plank',
//     },
//     {
//       id: '5',
//       title: 'Leg Raises',
//     },
//   ];

//   const Item = ({title}) => {
//     return (
//       <View style={styles.item}>
//         <Text>{title}</Text>
//       </View>
//     );
//   };

//   const renderItem = ({item}) => <Item title={item.title} />;

//   return (
//     <SafeAreaView>
//       <View>
//         <Image
//           source={{
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonpSjpGQ2-JD8-XFFD7LYsVSFCOiASj0wSOq1qxNvxGFHe7W6AU1LRAeJ2fOIzYICMGc&usqp=CAU',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.workname}>ABS WORKOUT</Text>

//         <FlatList
//           style={styles.container}
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//         <View>
//           <TouchableOpacity  style={styles.buttonpress}>
//             {/* <Button title="Kick Off"></Button> */}
//             <Pressable onPress={()=>navigation.navi } style={styles.button}>
//               <Text style={styles.textfield}>KICK OFF</Text>
//             </Pressable>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 1,
//     padding: 2,
//   },

//   image: {
//     marginTop: 30,
//     alignContent: 'center',
//     width: 380,
//     height: 260,
//     marginBottom: 50,
//     borderRadius: 20,
//   },

//   item: {
//     backgroundColor: '#D3D3D3',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     fontSize: 20,
//     alignItems: 'center',
//   },

//   workname: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 25,
//     marginBottom: 10,
//     bottom: 20,
//   },
//   buttonpress: {
//     padding: 6,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     width: '40%',
//     borderRadius: 10,
//     marginLeft: 120,
//     marginTop: 5,
//     top: 4,
//   },
//   button: {
//     backgroundColor: '#708090',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     borderRadius: 20,
//     padding: 10,
//     width: 150,
//   },
//   textfield:{
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'white',
//   }
// });

// export default WorkOutTwo;