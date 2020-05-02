import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import * as firebase from "firebase";

export class DrawerScreen extends React.Component {
  signout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Connected as: {firebase.auth().currentUser.email}</Text>
        <Button title="Sign out" onPress={this.signout}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    flex: 1,
  },
});
