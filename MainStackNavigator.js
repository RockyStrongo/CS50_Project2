import React from "react";
import { View } from "react-native";
import { SearchScreen } from "./searchscreen.js";
import { DetailsScreen } from "./DetailsScreen.js";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export class MainStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Search Movies"
        mode="modal"
        headerMode="none"
      >
        <Stack.Screen name="Search Movies" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}
