import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { movie } = route.params;
  console.log(movie);
  return (
    <View style={styles.mainView}>
      <Image style={styles.image} source={movie.image} />
      <Text>{movie.title}</Text>
      <Text>Release Date: {movie.release}</Text>
      <Text>Showing on Screen {movie.screenNumber}</Text>

      <View style={styles.menu}>
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Button
          title="Images"
          onPress={() => {
            navigation.navigate("Images");
          }}
        />
        <Button
          title="Back to Home"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    width: "60%",
    height: 400,
    resizeMode: 'cover'
  },
  menu: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'relative',
      bottom: -40
  }
});

export default DetailsScreen;
