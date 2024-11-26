import React, {useState} from "react";
import {View, Text,TouchableOpacity,onPressButton} from "react-native";
import { Button } from "./Button/Button";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./src/styles/home.style";


    const HomeScreen = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  
  return (
      <View style={styles.container}>
      <View style={styles.fundo}>
         
        <Text style={styles.title}>Início

        <View style={styles.genContainer}>
      <TouchableOpacity
      style={[
        styles.iconContainer,
        selectedIcon === 'iconM' && styles.selected,
        ]}
       onPress={() => setSelectedIcon('icon1')}
    >
      <Icon name="search" size={30} color={selectedIcon === 'icon1' ? 'white' : 'white'} />
      <Icon name="money" size={30} color={selectedIcon === 'icon1' ? 'white' : 'white'} />
      <Icon name="email" size={30} color={selectedIcon === 'icon1' ? 'white' : 'white'} />
      </TouchableOpacity>
      </View>
        </Text>

        <View style={styles.user}>


          <Text style={styles.userT}>[ImamgeDoUsuario] [Nome do usuario]</Text>

          <Text style={styles.userT}>Amigos(0)</Text>  
          <Button
          style={styles.button}
          iconName="adduser"
          variant="friend"
          onPress={onPressButton}
          />
          

          <Text style={styles.userT}>Recomendados</Text>
          <Text style={styles.userT}>[todos os jogos que existem]</Text>
          <Text style={styles.userT}>Continue</Text>
          <Text style={styles.userT}>[o qual o usuario clicou play]</Text>

          <Text style={styles.create}>Criações</Text>
          <Button
          style={styles.buttonC}
          iconName=""
          variant="friend"
          onPress={onPressButton}
          title="+"
          />
          <Text style={styles.userT}>[criados pelo usuario]</Text>

          <Text style={styles.userT}>Favoritos</Text>
          <Text style={styles.userT}>[Jogos com favorito]</Text>
          

        </View>
        
      </View>
      </View>
  );
}

export default HomeScreen;