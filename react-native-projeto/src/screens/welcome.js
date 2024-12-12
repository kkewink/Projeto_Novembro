import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Welcome(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ROBLOX
      </Text>
      <Button style={styles.button} title="Join App" onPress={() => navigation.navigate('Sign')}/>
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