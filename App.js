import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          initialRouteName="App_to_Home"
          headerMode="screen"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "rebeccapurple" },
            headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Movie Info" }}
          />
          <Stack.Screen name="Images" component={ImageScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Movie Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
