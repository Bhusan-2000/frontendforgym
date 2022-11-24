import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';



const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

function ChestBeginner({route}){
  const navigation = useNavigation();
  let email = route.params.email;
  const [count, setCount] = useState(41);

  const onDonePress = () => {
    if (count >= 40 && count <= 45) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const onBackPress = () => {
    if (count > 40 && count <= 45) {
      setCount(count - 1);
      console.log(count);
    }
  };

  const onFinishPress = () => {
    // navigation.goBack() 
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
      case 40:
        return 'Decline PushUps';
        break;

      case 41:
        return 'Hindu PushUps';

        break;
      case 42:
        return 'Wide Arm PushUps';

        break;
      case 43:
        return 'Shoulder Stretch';

        break;
      case 44:
        return 'Push Ups & Rotation';
      case 45:
        return "Great! You're pushing your limits :))"

        break;

      default:
        'Last';
        break;
    }
  };

  const getSets = () => {
    switch (count) {
      case 40:
        return 'X 12';
        break;

      case 41:
        return 'X 10';

        break;
      case 42:
        return 'X 10';

        break;
      case 43:
        return 'X 12';

        break;
      case 44:
        return 'X 10';
      

        break;

      default:
        'X 12';
        break;
    }
  };

  const getImage = () => {
    switch (count) {
      case 40:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/ff/cf/40/ffcf40474f0758dfedebc823f5532aa1.gif',
            }}
          />
        );

      case 41:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://image.2bstronger.com/article/fitness/the-14-toughest-do-anywhere-workout-moves-56348/1006.gif',
            }}
          />
        );

      case 42:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://thumbs.gfycat.com/TheseRigidBorer-size_restricted.gif',
            }}
          />
        );

        break;

      case 43:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://thumbs.gfycat.com/AlertAfraidAldabratortoise-max-1mb.gif',
            }}
          />
        );

        break;

      case 44:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://media4.popsugar-assets.com/files/thumbor/BaWEAcCjtJEjiwf3PqJHnZ_S23A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/08/10/766/n/1922729/1eae2dcf3d395379_PushUpTwist.gif',
            }}
          />
        );

        break;
      
        case 45:
          return (
            <Image
              style={styles.image}
              source={{
                uri: 'https://www.reactiongifs.us/wp-content/uploads/2018/02/SIMON-COWELL-THUMBS-UP.gif',
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
    fontSize: 40,
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

export default ChestBeginner;
