import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SearchScreen } from "./searchscreen.js";
import { DetailsScreen } from "./DetailsScreen.js";
import { SigninScreen } from "./SigninScreen.js";
import { SignupScreen } from "./SignupScreen.js";
import APIKeys from "./APIkeys.js";
import { MainStackNavigator } from "./MainStackNavigator.js";

import * as firebase from "firebase";
// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    userissignedin: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userissignedin: true });
      } else {
        this.setState({ userissignedin: false });
      }
    });
  }

  render() {
    if (this.state.userissignedin == true) {
      // User is signed in.
      return <MainStackNavigator />;
    } else if (this.state.userissignedin == false) {
      // No user is signed in.
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}
