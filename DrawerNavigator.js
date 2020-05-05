import React from "react";
import { View } from "react-native";

import { MainStackNavigator } from "./MainStackNavigator.js";
import { DrawerScreen } from "./DrawerScreen.js";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export class DrawerNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          hideStatusBar="true"
          drawerContent={(props) => <DrawerScreen {...props} />}
        >
          <Drawer.Screen name="MainStack" component={MainStackNavigator} />
          <Drawer.Screen name="Drawer" component={DrawerScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
