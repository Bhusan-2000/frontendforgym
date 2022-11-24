import {StyleSheet, Text, Image, SafeAreaView, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

function ArmBeginner({route}) {
  const navigation = useNavigation();
  let email = route.params.email;
  const [count, setCount] = useState(31);

  const onDonePress = () => {
    if (count >= 30 && count <= 35) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const onBackPress = () => {
    if (count > 30 && count <= 35) {
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
    navigation.navigate('HomeWorkout', {email});
  };

  const onHistoryPress = async () => {
    const email = 'akash@gmail.com';
    const input = {
      email,
    };
    const res = await fetch(`${API_URL}/history`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(res => {
        console.log(res.json());
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getText = () => {
    switch (count) {
      case 30:
        return 'Arm Raises';
        break;

      case 31:
        return 'Tricep Dips';

        break;
      case 32:
        return 'Diamond PushUps';

        break;
      case 33:
        return 'PushUps';

        break;
      case 34:
        return 'Dumbel Curl';

        break;
      case 35:
          return 'DONT GIVE UP,PUSH YOURSELF MORE :))';
  
          break;

      default:
        'Last';
        break;
    }
  };

  const getSets = () => {
    switch (count) {
      case 30:
        return 'X 12';
        break;

      case 31:
        return 'X 10';

        break;
      case 32:
        return 'X 10';

        break;
      case 33:
        return 'X 12';

        break;
      case 34:
        return 'X 10';

        break;
      

      default:
        'X 12';
        break;
    }
  };

  const getImage = () => {
    switch (count) {
      case 30:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif',
            }}
          />
        );

      case 31:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://thumbs.gfycat.com/CompleteZigzagFossa-max-1mb.gif',
            }}
          />
        );

      case 32:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://thumbs.gfycat.com/MisguidedAridAlaskanmalamute-max-1mb.gif',
            }}
          />
        );

        break;

      case 33:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif',
            }}
          />
        );

        break;

      case 34:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif',
            }}
          />
        );

        break;


        case 35:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.gifer.com/embedded/download/7E2e.gif',
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
}

const styles = StyleSheet.create({
  buttonback: {
    backgroundColor: 'red',
    marginLeft: 50,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    width: 150,
  },
  textBack: {
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

export default ArmBeginner;
