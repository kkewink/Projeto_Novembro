import { Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';

export default function Start() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ImageBackground 
        source={require('../assets/fundoR.jpg')}
        resizeMode="cover" 
        style={styles.image}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 44,
            marginTop: 44,
            fontWeight: 'bold',
            color: 'white',
          }}>
          ROBLOX
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
