import React, { useState} from "react";
import {View, Text} from "react-native";
import { Button } from "./Button/Button";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./src/styles/home.style";


export default function App() {

  return (
      <View style={styles.container}>
      <View style={styles.fundo}>
         
        <Text style={styles.title}>Início</Text>
      </View>
      </View>
  );
}

