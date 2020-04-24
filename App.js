import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';
import {SearchScreen}  from './searchscreen.js'
import {DetailsScreen}  from './DetailsScreen.js'
import {SigninScreen}  from './SigninScreen.js'
import APIKeys  from './APIkeys.js'

import * as firebase from 'firebase';
// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends React.Component {

state={
  userissignedin: null,
}


checkusersignin = () => {
  if (firebase.auth().currentUser) {
      // User is signed in.
      this.setState({ userissignedin: true });
    } else {
      // No user is signed in.
      this.setState({ userissignedin: false });
    }
}

componentDidMount(){
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search Movies" mode ="modal" headerMode="none">
        <Stack.Screen name="Search Movies" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} else if(this.state.userissignedin == false){
  // No user is signed in.
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Signin">
        {props => <SigninScreen {...props} handlestate={this.checkusersignin} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
        {props => <SignupScreen {...props} handlestate={this.checkusersignin} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
} else {
  return ( null )
}
    /*
    if(this.state.userisloggedin == false){
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search Movies" mode ="modal" headerMode="none">
            <Stack.Screen name="Search Movies" component={SearchScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    */
  }
}
