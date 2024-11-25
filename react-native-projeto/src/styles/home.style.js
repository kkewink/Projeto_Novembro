import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222427',
        flex:1,
        justifyContent: "center",
        paddingHorizontal: 20,
        height: 300,
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
        fontSize: 30,
        textAlign: 'right',
        fontWeight:'bold',
      }
});

export default styles;