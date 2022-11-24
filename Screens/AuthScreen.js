import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import Background from './Background';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const AuthScreen = ({route}) => {

  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
  };
  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
          
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
      navigation.navigate('HomeWorkout', {email})
  };

  const onSubmitHandler = () => {
    const payload = {
      email,
      name,
      password,
    };
    fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);

            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    
    <View>
      
      <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>

      <View style={styles.form}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={setEmail}></TextInput>
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={setName}></TextInput>
          )}

          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}></TextInput>

          <TouchableOpacity style={styles.buttonDone} onPress={onSubmitHandler}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
              Done
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttontext} onPress={onChangeHandler}>
            <Text style={styles.buttonsignlogtext}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDone: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 200,
    marginBottom: 120,
    color: 'black',
    marginRight:'auto',
    marginLeft:'auto'
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
    marginBottom: 300,
    width: 300,
    marginRight:'auto',
    marginLeft:'auto'
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    marginRight:'auto',
    marginLeft:'auto'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    paddingTop: 10,
    fontSize: 18,
    minHeight: 40,
    paddingBottom: 10,
    marginBottom: 5,
    marginRight:'auto',
    marginLeft:'auto',
  },
  buttontext: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonsignlogtext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default AuthScreen;
