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

// const WorkOutFour = () => {
//   const DATA = [
//     {
//       id: '1',
//       title: 'Decline Push-Ups',
//     },
//     {
//       id: '2',
//       title: 'Hindu Push-Ups',
//     },
//     {
//       id: '3',
//       title: 'Shoulder Stretch',
//     },
//     {
//       id: '4',
//       title: 'Cobra Stretch',
//     },
//     {
//       id:'5',
//       title:'Burpees',
//     }
    
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
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCT0tewpNAZ6R9JUoMDHIHGnpE44U2Fl1Zw&usqp=CAU',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.workname}>CARDIO WORKOUT</Text>

//         <FlatList
//           style={styles.container}
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//         <View>
//         <TouchableOpacity style={styles.buttonpress}>
//         <Pressable style={styles.button}>
//               <Text style={styles.textfield}>KICK OFF</Text>
//             </Pressable>
//         </TouchableOpacity>
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
//     top:4

//   },
  
//  button: {
//   backgroundColor: '#708090',
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   borderRadius: 20,
//   padding: 10,
//   width: 150,
// },
// textfield:{
//   textAlign: 'center',
//   fontWeight: 'bold',
//   fontSize: 20,
//   color: 'white',
// }
// });

// export default WorkOutFour;



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

function WorkOutFour({route}) {
  const navigation = useNavigation();
  let email = route.params.email;
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{height: 200, width: '100%'}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCT0tewpNAZ6R9JUoMDHIHGnpE44U2Fl1Zw&usqp=CAU',
        }}></Image>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          bottom: 40,
          backgroundColor: 'white',
        }}>
        CHEST BEGINNER
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
        <Text style={{fontSize: 18}}>DECLINE PUSHUPS</Text>
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
        <Text style={{fontSize: 18}}>HINDU PUSHUPS</Text>
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
        <Text style={{fontSize: 18}}>SHOULDER STRETCH</Text>
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
        <Text style={{fontSize: 18}}>COBRA STRETCH</Text>
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
        <Text style={{fontSize: 18}}>PUSH-UP & ROTATION</Text>
      </TouchableOpacity>
      <View>
      <Pressable 
        onPress={()=>navigation.navigate('ChestBeginner',{email})}
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
export default WorkOutFour;

