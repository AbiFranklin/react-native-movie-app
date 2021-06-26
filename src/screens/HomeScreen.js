import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation, route }) => {
  console.log("ROUTE: ", route);
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={styles.button}
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
      >
        <View>
          <Text style={styles.buttonText}>Star Wars</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
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
      >
        <View>
          <Text style={styles.buttonText}>Black Panther</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
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
      >
        <View>
          <Text style={styles.buttonText}>The Matrix</Text>
        </View>
      </TouchableOpacity>
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
  button: {
    marginBottom: 30,
    width: 150,
    height: 50,
    alignItems: "center",
    backgroundColor: "rebeccapurple",
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  }
});

export default HomeScreen;
