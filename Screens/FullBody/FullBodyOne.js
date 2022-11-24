import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';



const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

function FullBodyOne({route}){
  const navigation = useNavigation();
  let email = route.params.email;
  const [count, setCount] = useState(10);

  const onDonePress = () => {
    if (count >= 10 && count <= 15) {
      setCount(count + 1);
    }
    else{
      navigation.navigate('HomeWorkOut');
    }
    console.log(count);
    
  };

  const onBackPress = () => {
    if (count > 10 && count <= 15) {
      setCount(count - 1);
      console.log(count);
    }
  };

  const onFinishPress = () => { 
    exercise = count;
    const payload = {
      email,
      exercise,
    };
    console.log(payload);
    fetch(`${API_URL}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
      
  navigation.navigate('HomeWorkout',{email})
  };


  const getText = () => {
    switch (count) {
      case 10:
        return 'Jumping Jacks';
        break;

      case 11:
        return 'Incline PushUps';

        break;
      case 12:
        return 'Wide Arm PushUps';

        break;
      case 13:
        return 'Cobra Stretch';

        break;
      case 14:
        return 'Chest Stretch';

        break;
      case 15:
        return "Wow! You're making a progress,Keep it up:)) "  
          break;

      default:
        'Last';
        break;
    }
  };

  const getSets = () => {
    switch (count) {
      case 10:
        return 'X 12';
        break;

      case 11:
        return 'X 10';

        break;
      case 12:
        return 'X 10';

        break;
      case 13:
        return 'X 12';

        break;
      case 14:
        return 'X 10';

        break;


      default:
        'X 12';
        break;
    }
  };

  const getImage = () => {
    switch (count) {
      case 10:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif',
            }}
          />
        );

      case 11:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Incline-Push-Up.gif',
            }}
          />
        );

      case 12:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn.prod.openfit.com/uploads/2020/03/10162714/wide-arm-push-up.gif',
            }}
          />
        );

        break;

      case 13:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.yogajournal.com/wp-content/uploads/2021/12/Cobra.gif?width=730',
            }}
          />
        );

        break;

      case 14:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.vissco.com/wp-content/uploads/animation/sub/double-knee-to-chest-stretch.gif',
            }}
          />
        );

        break;
      case 15:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://c.tenor.com/_ZUI0gcMSHgAAAAC/thumbs-up-simon-cowell.gif',
            }}
          />
        );
        break;

      default:
        <Button>Back to main</Button>;
        break;
    }
  };

  return (
    <SafeAreaView>
      {getImage()}

      <Text style={styles.exercise}>{getText()}</Text>
      <Text style={styles.sets}> {getSets()}</Text>

      <View style={{flexDirection:'row'}}>
      <Pressable onPress={onDonePress} style={styles.button}>
        <Text style={styles.textfield}>DONE</Text>
      </Pressable>
      <Pressable onPress={onBackPress} style={styles.buttonback}>
        <Text style={styles.textBack}>BACK</Text>
      </Pressable>

      </View>
      
      <Pressable style={styles.buttonMain} onPress={onFinishPress}>
        <Text style={styles.backtomain}>FINISH</Text>
      </Pressable>
      {/* <Pressable  style={styles.buttonMain} onPress={onHistoryPress}>
        <Text style={styles.backtomain}>HISTORY</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonback:{
    backgroundColor: 'red',
    marginLeft: 50,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    width: 150,

  },
  textBack:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',

  },


  image: {
    marginTop: 120,
    width: 400,
    height: 230,
    bottom: 120,
    marginright:'auto',
    marginleft:'auto',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    padding: 10,
    width: 150,
  },
  textfield: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  exercise: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 140,
  },
  sets: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 140,
  },
  backtomain: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonMain: {
    backgroundColor: 'blue',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    padding: 10,
    width: 150,
    top: 20,
  },
});

export default FullBodyOne;
