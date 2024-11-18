import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const LoadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ROBLOX
      </Text>
      <Text style={styles.load}>carregando...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'black',
    fontWeight:'bold',
    fontSize:60,
    textAlign:'center',
    marginTop:320,
  },
  load:{
    marginTop:300,
    color:'#778899'
  }
});

export default LoadScreen;