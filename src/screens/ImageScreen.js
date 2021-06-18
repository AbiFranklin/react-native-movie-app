import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ImageScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Text>Image Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ImageScreen;
