import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  console.log("ROUTE: ", route);
  return (
    <View style={styles.mainView}>
      <Text>Movies</Text>
      <Button
        title="Star Wars"
        onPress={() => {
          navigation.navigate("Details", {
            movie: {
              title: "Star Wars",
              release: 1977,
              screenNumber: 1,
              image: require("../../images/starwars.jpg"),
            },
          });
        }}
      />
      <Button
        title="Black Panther"
        onPress={() => {
          navigation.navigate("Details", {
            movie: {
              title: "Black Panther",
              release: 2018,
              screenNumber: 2,
              image: require("../../images/blackpanther.jpg"),
            },
          });
        }}
      />
      <Button
        title="The Matrix"
        onPress={() => {
          navigation.navigate("Details", {
            movie: {
              title: "The Matrix",
              release: 1999,
              screenNumber: 3,
              image: require("../../images/matrix.jpg"),
            },
          });
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

export default HomeScreen;
