import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('Guess a number between 1-100');
  const [randomNumber, setRandomNumber] = useState(0);
  const [number, setNumber] = useState('');
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    startGame();
  }, [])

  const startGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100 + 1));
  }
  
  const buttonPressed = () => {
    if (parseInt(number) > randomNumber) {
      setText('Your guess ' + number + ' is too high')
      setCounter(counter + 1)
    } 
    else if (parseInt(number) < randomNumber) {
      setText('Your guess ' + number + ' is too low' )
      setCounter(counter + 1)
    } 
    else {
      Alert.alert('You guessed the number ' + randomNumber + ' in ' + counter + ' guesses')
      setCounter(0);
      startGame();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{text}</Text>
      <TextInput
          keyboardType='numeric'
          value={number}
          onChangeText={number => setNumber(number)}
          style={{ width: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
      />
      <Button style={styles.item} onPress={buttonPressed} title="Make a guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 10,
    marginTop: 10,
    marginBottom: 10,
  }
});
