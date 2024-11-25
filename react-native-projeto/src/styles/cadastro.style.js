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
    subtituloo:{
      color:'white',
      fontSize:14,
      paddingRight:180,
    },
    subtitulo2:{
      color:'white',
      paddingBottom:5,
      paddingRight:268,
      fontSize:14,
    },
   pickerOP: {
      height: 50,
      width: 310,
      color:'white',
      backgroundColor:'#656668',
      borderRadius: 4,
    },
    genContainer:{
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconContainer:{
        flex: 1,
      justifyContent: 'center',
        flexDirection: 'row',
      alignItems:'center',
      marginHorizontal:20,
    paddingBottom: 15,
    },

    selectedM:{
      borderWidth: 2,
      borderColor: 'blue',
      borderRadius: 50,
      padding: 10,
    },
    selectedF:{
      borderWidth: 2,
      borderColor: 'pink',
      borderRadius: 50,
      padding: 10,
    },
  });
  
  export default styles;