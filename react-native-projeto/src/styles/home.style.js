import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        paddingInlineStart: 20,
        paddingInlineEnd:0,
        backgroundColor:'#222427',
      },
      title:{
        color:'white',
        fontSize: 30,
        textAlign: 'left',
        fontWeight:'bold',
        position: 'absolute',
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
      },
      user:{
        color:'white',
      },
});

export default styles;