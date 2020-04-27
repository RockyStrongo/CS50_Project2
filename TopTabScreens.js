import React from "react";
import { View } from "react-native";
import { SearchScreen } from "./searchscreen.js";
import { ScreenTwo } from "./ScreenTwo.js";
import { MainStackNavigator } from "./MainStackNavigator.js";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default class TopTabScreens extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search Movies" component={MainStackNavigator} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
