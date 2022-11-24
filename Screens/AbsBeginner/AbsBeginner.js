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

function AbsBeginner({route}) {
  const navigation = useNavigation();
  let email = route.params.email;
  const [count, setCount] = useState(20);

  const onDonePress = () => {
    if (count >= 20 && count <= 25) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const onBackPress = () => {
    if (count > 20 && count <= 25) {
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

  const getText = () => {
    switch (count) {
      case 20:
        return 'Jumping Jacks';
        break;

      case 21:
        return 'Mountain Climbers';

        break;
      case 22:
        return 'Heel Touch';

        break;
      case 23:
        return 'Plank';

        break;
      case 24:
        return 'Leg Raises';

        break;
      case 25:
        return 'Awesome To See You, Work Hard :))';

      default:
        'Last';
        break;
    }
  };

  const getSets = () => {
    switch (count) {
      case 20:
        return 'X 12';
        break;

      case 21:
        return 'X 10';

        break;
      case 22:
        return 'X 10';

        break;
      case 23:
        return 'X 12';

        break;
      case 24:
        return 'X 10';

        break;

      default:
        'X 12';
        break;
    }
  };

  const getImage = () => {
    switch (count) {
      case 20:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif',
            }}
          />
        );

      case 21:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif',
            }}
          />
        );

      case 22:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif',
            }}
          />
        );

        break;

      case 23:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif',
            }}
          />
        );

        break;

      case 24:
        return (
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif',
            }}
          />
        );

        case 25:
          return (
            <Image
              style={styles.image}
              source={{
                uri: 'https://media.tenor.com/47mXIIokeGEAAAAC/thumbs-up-good-job.gif',
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

      <View style={{flexDirection: 'row'}}>
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

export default AbsBeginner;
