import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Image
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';


function HomeWorkout() {
  const navigation = useNavigation();
  const route = useRoute();
  let email = route.params.email;

  return (
    <View style={StyleSheet.container}>
    
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',marginLeft:50}}>{email} </Text>
      
      <Text >has started hitting the gym!!!</Text>
      </View>
      <Text style={{borderEndWidth:1,height:2,backgroundColor:'grey'}} />
      

      
      
      <ScrollView>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,top:10}}>Work Out Exercises</Text>
      
        <Pressable
          onPress={()=>navigation.navigate('WorkOutOne',{email})}
          style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonpSjpGQ2-JD8-XFFD7LYsVSFCOiASj0wSOq1qxNvxGFHe7W6AU1LRAeJ2fOIzYICMGc&usqp=CAU',
            }}
            style={{height: 200, width: 300,borderRadius:20}}></Image>
          <Text style={{bottom:34,backgroundColor:'white',fontSize:25,borderRadius:10,}}>FULL BODY</Text>
        </Pressable>

        <Pressable
          onPress={()=>navigation.navigate("WorkOutTwo",{email})}
          style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NHvoutGn-Vr_uwVbOOtezhENvx9jhV6pfQ&usqp=CAU',
            }}
            style={{height: 200, width: 300,borderRadius:20}}></Image>
          <Text style={{bottom:34,backgroundColor:'white',fontSize:25,borderRadius:10,}}>ABS BEGINNER</Text>
        </Pressable>

        <Pressable
          onPress={()=>navigation.navigate("WorkOutThree",{email})}
          style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Image
            source={{
              uri: 'https://thumbs.dreamstime.com/b/muscular-bodybuilder-guy-doing-exercises-dumbbell-dumbbells-over-black-background-39531796.jpg',
            }}
            style={{height: 200, width: 300,borderRadius:20}}></Image>
            <Text style={{bottom:34,backgroundColor:'white',fontSize:25,borderRadius:10,}}>ARM BEGINNER </Text>
        </Pressable>

        <Pressable
          onPress={()=>navigation.navigate("WorkOutFour",{email})}
          style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCT0tewpNAZ6R9JUoMDHIHGnpE44U2Fl1Zw&usqp=CAU',
            }}
            style={{height: 200, width: 300,borderRadius:20}}></Image>
          <Text style={{bottom:34,backgroundColor:'white',fontSize:25,borderRadius:10,}}>CHEST BEGINNER</Text>
        </Pressable>

        {/* <Pressable onPress={()=>navigation.navigate('History',{email})} style={{alignItems:'center',top:10}}><Text style={{backgroundColor:'#84cbf3',borderRadius:4,fontSize:19,bottom:30,fontWeight:'bold'}}>MY HISTORY</Text></Pressable> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default HomeWorkout;

