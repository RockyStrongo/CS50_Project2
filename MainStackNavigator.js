import React from "react";
import Constants from "expo-constants";

import { View } from "react-native";
import { SearchScreen } from "./searchscreen.js";
import { ScreenTwo } from "./ScreenTwo.js";
import { DetailsScreen } from "./DetailsScreen.js";
import { SmallModalScreen } from "./SmallModalScreen.js";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export class MainStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Tabs" component={TopTabScreens} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            cardStyle: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
        />
        <Stack.Screen
          name="Modal"
          component={SmallModalScreen}
          options={{
            cardStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const Tab = createMaterialTopTabNavigator();

export class TopTabScreens extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            marginTop: Constants.statusBarHeight + 5,
          },
        }}
      >
        <Tab.Screen name="Search Movies" component={SearchScreen} />
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      </Tab.Navigator>
    );
  }
}
