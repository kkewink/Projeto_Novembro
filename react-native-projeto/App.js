import React, { useState} from "react";
import { StyleSheet, TextInput, View, Text} from "react-native";
import { Button } from "./Button/Button";

import { useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'



const schema = yup.object({
  username: yup.string().required('Requer nome de usuário e senha'),
  password: yup.string().min(8,'Nome de usuario ou senha incorretos').required('Requer nome de usuário e senha'),
})

export default function App() {
    const { control, handleSubmit, formState: { errors } } = useForm({ 
      resolver: yupResolver(schema)
    })

    function handleLogIn(data){
      console.log(data)
    }

  return (
      <View style={styles.container}>
      <View style={styles.fundo}>
         
        <Text style={styles.title}>Cadastrar</Text>


        <Controller
            control={control}
            name="username"
            render={({ field: {onChange, onBlur, value} }) => (

            
          
          <TextInput 
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}// chamado quando o textinput e tocado
            value={value}
            placeholder="User"
          />
        )}
      />
      
      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
        <Controller
            control={control}
            name="password"
            render={({ field: {onChange, onBlur, value} }) => (

            
          
          <TextInput 
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}// chamado quando o textinput e tocado
            value={value}
            placeholder="Password"
            secureTextEntry={true}
          />
        )}
      />
        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
        <Button
          variant="outline"
          style={styles.button}
          onPress={handleSubmit(handleLogIn)}
          title="Entrar"
        />

        <Text style={styles.fala}>
          Já possui conta? 
          <Text> Logar-se</Text>
        </Text>

      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor:'#222427',
    flex:1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  fundo:{
    backgroundColor:'#393b3d',
    paddingTop:20,
    paddingBottom:50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize:34,
    marginBottom:34,
  },
  input:{
    backgroundColor:'#656668',
    width:'100%',
    height:40,
    paddingHorizontal: 8,
    marginBottom:20,
    borderRadius: 4,
    color:'black',
  },
  button:{
    borderColor:'#FFFFFFB2',
    color:'white',
    width:'100%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
  },
  ButtonText:{
    color:'#FFFFFFB2',
    fontWeight: 'bold',
    fontSize:18,
  },
  labelError:{
    alignSelf:'flex-start',
    color:'#f74b52',
    marginBottom:8,
  },
  fala:{
    color:'white',
    fontSize:16,
    paddingTop:10,
  }
});
