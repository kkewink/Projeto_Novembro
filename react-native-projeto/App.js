import React, { useState } from 'react';
import { View,Text ,TextInput, Button, StyleSheet } from 'react-native';

export default function App({navigation}) {
  const [gameName, setGameName] = useState('');
  const [gameDescription, setGameDescription] = useState('');

  const handleSubmit = () => {
    const newGame = {
      name: gameName,
      description: gameDescription,
    };

    // Envia o novo jogo para a tela "Home"
    navigation.navigate('Home', { game: newGame });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Crianção de jogo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Jogo"
        placeholderTextColor={'white'}
        value={gameName}
        onChangeText={setGameName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Jogo"
        placeholderTextColor={'white'}
        value={gameDescription}
        onChangeText={setGameDescription}
      />
      <Button title="Criar Jogo" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#222427',
  },
  texto:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color:'white',
  },
});