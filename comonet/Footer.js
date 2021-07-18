import React from "react";
import { View, Text } from "react-native";
var year = new Date().getFullYear();
const Footer = () => {
   
  return (
      
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
        fontWeight: "bold",
    
      }}
    >
     
      <Text style={{
          color:"white",
           backgroundColor: "blue",
            flex: 1,alignItems:"center",
            padding:"10px",style:blur(),
            fontSize:"25px" }}>
                <center>
                   <b> Copyright @ <sup>{year}</sup></b>
                    
                    </center>
      </Text>
    </View>
  );
};

export default Footer;