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

// const WorkOutThree = () => {
//   const DATA = [
//     {
//       id: '1',
//       title: 'Arm Raises',
//     },
//     {
//       id: '2',
//       title: 'Triceps Dips',
//     },
//     {
//       id: '3',
//       title: 'Diamond Push-Ups',
//     },
//     {
//       id: '4',
//       title: 'Push Ups',
//     },
//     {
//       id: '5',
//       title: 'Dumbel Curl',
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
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NHvoutGn-Vr_uwVbOOtezhENvx9jhV6pfQ&usqp=CAU',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.workname}>ARM WORKOUT</Text>

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

// export default WorkOutThree;


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

function WorkOutThree({route}) {
  const navigation = useNavigation();
  let email = route.params.email;

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{height: 200, width: '100%'}}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/muscular-bodybuilder-guy-doing-exercises-dumbbell-dumbbells-over-black-background-39531796.jpg',
        }}></Image>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          bottom: 40,
          backgroundColor: 'white',
        }}>
        ARM BEGINNER
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
        <Text style={{fontSize: 18}}>ARM RAISES</Text>
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
        <Text style={{fontSize: 18}}>TRICEP DIPS</Text>
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
        <Text style={{fontSize: 18}}>DIAMOND PUSHUPS</Text>
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
        <Text style={{fontSize: 18}}>PUSHUPS</Text>
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
        <Text style={{fontSize: 18}}>DUMBEL CURL</Text>
      </TouchableOpacity>
      <View>
      <Pressable 
        onPress={()=>navigation.navigate('ArmBeginner',{email})}
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
export default WorkOutThree;
