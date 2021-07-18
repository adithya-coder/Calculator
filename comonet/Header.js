import React from "react";
import { View, Text } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
     
      <Text style={{color:"red", backgroundColor: "", flex: 1,alignItems:"center",padding:"1px",fontSize:"25px",  fontWeight: "bold",borderRadius:"10px",borderColor:"blue"}}> Calculator</Text>
    </View>
  );
};

export default Header;