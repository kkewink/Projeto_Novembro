import React from "react";
import { StyleSheet, View, Text, SafeAreaView,ImageBackground } from "react-native";
import { Button } from "./Button/Button";

const fundo = {uri:'https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg'};

export function SwitchScreen() {
  

  function onPressButton() {
    console.log("pressionado");
  }
  return (
    <SafeAreaView style={{ flex: 1 }} egdes={['left', 'right']} >
    <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 44,
          marginTop: 44,
          fontWeight: "bold",
          color: "white",
        }}
      >
        ROBLOX

      </Text>
      <View style={styles.container}>
        <Button
          variant="outline"
          style={{ marginBottom: 10 }}
          onPress={onPressButton}
          title="Sing Up"
        />

        <Button
          style={{ marginBottom: 0 }}
          iconName="shoppingcart"
          variant="blackFriday"
          onPress={onPressButton}
          title="Log In"
        />
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default SwitchScreen;