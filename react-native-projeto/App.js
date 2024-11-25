import React, { useState} from "react";
import {View, Text, TouchableOpacity,Image} from "react-native";
import { Button } from "./Button/Button";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./src/styles/home.style";


export default function App() {
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

        <Image
          source={{ uri: 'https://w7.pngwing.com/pngs/268/996/png-transparent-account-avatar-profile-profile-icon-profile-picture-user-user-profile-business-and-management-line-icon-thumbnail.png'}}
          style={styles.Image}
        />
        <Icon name="people"/><Text style={styles.user}>Nome do Usuario</Text>










      </View>
      </View>
  );
}

