import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WorkOutOne, FullBodyOne} from './Screens/FullBody';
import {WorkOutTwo, AbsBeginner} from './Screens/AbsBeginner';
import {WorkOutThree, ArmBeginner} from './Screens/ArmBeginner';
import {WorkOutFour, ChestBeginner} from './Screens/ChestBeginner';
import {History, HomeWorkout,AuthScreen} from './Screens';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name='Auth' component={AuthScreen} /> */}
        <Stack.Screen name='AuthScreen' component={AuthScreen} />
        <Stack.Screen name="HomeWorkout" component={HomeWorkout} />
        <Stack.Screen name="WorkOutOne" component={WorkOutOne} />
        <Stack.Screen name="FullBodyOne" component={FullBodyOne} />
        <Stack.Screen name="WorkOutTwo" component={WorkOutTwo} />
        <Stack.Screen name="AbsBeginner" component={AbsBeginner} />
        <Stack.Screen name="WorkOutThree" component={WorkOutThree} />
        <Stack.Screen name="ArmBeginner" component={ArmBeginner} />
        <Stack.Screen name="WorkOutFour" component={WorkOutFour} />
        <Stack.Screen name="ChestBeginner" component={ChestBeginner} />
        <Stack.Screen name='History' component={History} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
