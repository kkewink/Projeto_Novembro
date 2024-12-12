import React, { useState} from "react";
import { StyleSheet, TextInput, View, Text, selectedValue,TouchableOpacity} from "react-native";
import { Button } from "../../Button/Button";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from "../styles/cadastro.style";

import Icon from 'react-native-vector-icons/MaterialIcons';

const schema = yup.object({
  username: yup.string().required('Requer nome de usuário e senha'),
  password: yup.string().min(8,'Nome de usuario ou senha incorretos').required('Requer nome de usuário e senha'),
})


export default function Sing(){
  const { control, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(schema)
  })

  function handleLogIn(data){
    console.log(data)
  }
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const navigation = useNavigation();
return (
    <View style={styles.container}>
    <View style={styles.fundo}>
       
      <Text style={styles.title}>Cadastrar</Text>

      <Text style={styles.subtituloo}>Data de nascimento</Text>
    <Picker
      selectedValue={selectedValue}
      style={styles.pickerOP}
    >
      <Picker.Item label="Dia" />
      <Picker.Item label="01" value="01" />
      <Picker.Item label="02" value="02" />
      <Picker.Item label="03" value="03" />
      <Picker.Item label="04" value="04" />
      <Picker.Item label="05" value="05" />
      <Picker.Item label="06" value="06" />
      <Picker.Item label="07" value="07" />
      <Picker.Item label="08" value="08" />
      <Picker.Item label="09" value="09" />
      <Picker.Item label="10" value="10" />
      <Picker.Item label="11" value="11" />
      <Picker.Item label="12" value="12" />
      <Picker.Item label="13" value="13" />
      <Picker.Item label="14" value="14" />
      <Picker.Item label="15" value="15" />
      <Picker.Item label="16" value="16" />
      <Picker.Item label="17" value="17" />
      <Picker.Item label="18" value="18" />
      <Picker.Item label="19" value="19" />
      <Picker.Item label="20" value="20" />
      <Picker.Item label="21" value="21" />
      <Picker.Item label="22" value="22" />
      <Picker.Item label="23" value="23" />
      <Picker.Item label="24" value="24" />
      <Picker.Item label="25" value="25" />
      <Picker.Item label="26" value="26" />
      <Picker.Item label="27" value="27" />
      <Picker.Item label="28" value="28" />
      <Picker.Item label="29" value="29" />
      <Picker.Item label="30" value="30" />
      <Picker.Item label="31" value="31" />
    </Picker>
    
    <Picker
      selectedValue={selectedValue}
      style={styles.pickerOP}
    >
      <Picker.Item label="Mês" />
      <Picker.Item label="Janeiro" value="Janeiro" />
      <Picker.Item label="Feveiro" value="Feveiro" />
      <Picker.Item label="Março" value="Março" />
      <Picker.Item label="Abril" value="Abril" />
      <Picker.Item label="Maio" value="Maio" />
      <Picker.Item label="Junho" value="Junho" />
      <Picker.Item label="Julho" value="Julho" />
      <Picker.Item label="Agosto" value="Agosto"/>
      <Picker.Item label="Setembro" value="Setembro" />
      <Picker.Item label="Outubro" value="Outubro" />
      <Picker.Item label="Novembro" value="Novembro" />
      <Picker.Item label="Dezembro" value="Dezembro" />
      
    </Picker>

    <Picker
      selectedValue={selectedValue}
      style={styles.pickerOP}
    >
      <Picker.Item label="Ano" />
      <Picker.Item label="1985" value="1985" />
      <Picker.Item label="1986" value="1986" />
      <Picker.Item label="1987" value="1987" />
      <Picker.Item label="1988" value="1988" />
      <Picker.Item label="1989" value="1989" />
      <Picker.Item label="1990" value="1990" />
      <Picker.Item label="1991" value="1991" />
      <Picker.Item label="1992" value="1992" />
      <Picker.Item label="1993" value="1993" />
      <Picker.Item label="1994" value="1994" />
      <Picker.Item label="1995" value="1995" />
      <Picker.Item label="1996" value="1996" />
      <Picker.Item label="1997" value="1997" />
      <Picker.Item label="1998" value="1998" />
      <Picker.Item label="1999" value="1999" />
      <Picker.Item label="2000" value="2000" />
      <Picker.Item label="2001" value="2001" />
      <Picker.Item label="2002" value="2002" />
      <Picker.Item label="2003" value="2003" />
      <Picker.Item label="2004" value="2004" />
      <Picker.Item label="2005" value="2005" />
      <Picker.Item label="2006" value="2006" />
      <Picker.Item label="2007" value="2007" />
      <Picker.Item label="2008" value="2008" />
      <Picker.Item label="2009" value="2009" />
      <Picker.Item label="2010" value="2010" />
      <Picker.Item label="2011" value="2011" />
      <Picker.Item label="2012" value="2012" />
      <Picker.Item label="2013" value="2013" />
      <Picker.Item label="2014" value="2014" />
      <Picker.Item label="2015" value="2015" />
      <Picker.Item label="2016" value="2016" />
      <Picker.Item label="2017" value="2017" />
      <Picker.Item label="2018" value="2018" />
      <Picker.Item label="2019" value="2019" />
    </Picker>


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

      <View style={styles.genContainer}>
      <TouchableOpacity
      style={[
        styles.iconContainer,
        selectedIcon === 'iconM' && styles.selected,
        ]}
       onPress={() => setSelectedIcon('iconM')}
    >
      <Icon name="male" size={30} color={selectedIcon === 'iconM' ? 'blue' : 'white'} />
      </TouchableOpacity>


      <TouchableOpacity
      style={[
        styles.iconContainer,
        selectedIcon === 'iconF' && styles.selected,
        ]}
        onPress={() => setSelectedIcon('iconF')}
      >
        <Icon name="female" size={30} color={selectedIcon === 'iconF' ? 'pink' : 'white'} /> 
      </TouchableOpacity>
      </View>


      <Button
        variant="primary"
        style={styles.button}
        onPress={handleSubmit(handleLogIn)}
        title="Cadastrar-se"
      />

      <Text style={styles.fala}>
        Já possui conta? 
        <Text> Logar-se </Text>
      </Text>
    </View>
    </View>
);
}
