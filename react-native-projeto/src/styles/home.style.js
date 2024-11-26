import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "",
        paddingTop:40,
        paddingLeft: 20,
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
        marginBottom:15,
        width:1400
      },
      iconContainer:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
      },
      user:{
        paddingTop:50,
      },
      userT:{
        color:'white',
        fontSize:14,
        paddingBottom:20,
        fontWeight:'bold',
      },
      create:{
        color:'white',
        paddingBottom:5,
        fontWeight:'bold',
      },
      buttonC:{
        width:55,
        height:50,
        borderColor: 'white',
        borderWidth:1,
        marginBottom:20,
        paddingBottom:3,
      },
      button:{
        paddingLeft: 20,
        width:55,
        height:50,
        borderColor: 'white',
        borderWidth:1,
        marginBottom:20,
      },
});

export default styles;