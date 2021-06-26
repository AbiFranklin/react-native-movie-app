import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://www.omdbapi.com/?t=${movie.title}&y=${movie.release}&apikey=44dd605`
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        setMovieDetails(response);
        setPoster(response.Poster);
      }
    };
  }, []);

  return (
    <View style={styles.mainView}>
      {poster ? console.log(poster) : null}
      {poster ? (
        <Image source={{ uri: poster }} style={styles.image} />
      ) : (
        <Text>""</Text>
      )}

      <Text style={styles.title}>{movieDetails ? movieDetails.Title : "Loading"}</Text>
      <Text>
        {movieDetails
          ? `Released:  ${movieDetails.Year}  Rated: ${movieDetails.Rated}`
          : "Loading"}
      </Text>
      <Text>{movieDetails ? movieDetails.Plot : "Loading"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
    marginTop: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: 400,
    resizeMode: "cover",
  },
  menu: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    bottom: -40,
  },
  title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 10
  }
});

export default DetailsScreen;
