import React, { useState} from "react";
import { StyleSheet, TextInput, View, Text, selectedValue} from "react-native";
import { Button } from "./Button/Button";
import { Picker } from "@react-native-picker/picker";

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
    const [selectedValue, setSelectedValue] = useState('option1');

  return (
      <View style={styles.container}>
      <View style={styles.fundo}>
         
        <Text style={styles.title}>Cadastrar</Text>

        <Text style={styles.subtitulo3}>Data de nascimento</Text>

        <View>
      <Picker
        selectedValue={selectedValue}
        style={styles.pickerOP}
      >
        <Picker.Item label="Dia" />
        <Picker.Item label="01" value="01" />
        <Picker.Item label="02" value="02" />
        <Picker.Item label="03" value="03" />
      </Picker>

      <Picker
        selectedValue={selectedValue}
        style={styles.pickerOP}
      >
        <Picker.Item label="Mês" />
        <Picker.Item label="Janeiro" value="Janeiro" />
        <Picker.Item label="Feveiro" value="Feveiro" />
        <Picker.Item label="Março" value="Março" />
      </Picker>
      <Picker
        selectedValue={selectedValue}
        style={styles.pickerOP}
      >
        <Picker.Item label="Ano" />
        <Picker.Item label="2000" value="2000" />
        <Picker.Item label="2001" value="2001" />
        <Picker.Item label="2002" value="2002" />
      </Picker>
    </View>


        <Text style={styles.subtitulo}>Usuario</Text>
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
      <Text style={styles.subtitulo2}>Senha</Text>
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
          variant="primary"
          style={styles.button}
          onPress={handleSubmit(handleLogIn)}
          title="Cadastrar-se"
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
  },
  subtitulo:{
    color:'white',
    paddingBottom:5,
    paddingRight:257,
    fontSize:14,
  },
  subtitulo2:{
    color:'white',
    paddingBottom:5,
    paddingRight:268,
    fontSize:14,
  }, 
  subtitulo3:{
    color:'white',
    flex:1,
    paddingRight:180,
  },
  containerOP: {
    flex: 1,
     justifyContent: 'center',
      alignItems: 'center'
 },

 labelOP: { color:'white',fontSize: 18,borderColor:'gray',border:5 },
 pickerOP: { height: 50, width: 200,color:'white',backgroundColor:'#656668' },
});