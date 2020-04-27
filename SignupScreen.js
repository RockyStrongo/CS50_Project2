import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import * as firebase from "firebase";

export class SignupScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  };

  createnewuser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        function (user) {},
        function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        }
      );
  };

  gotosignin = () => {
    this.props.navigation.navigate("Signin");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.input}
          value={this.state.email}
          onChangeText={this.getHandler("email")}
          placeholder="email"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={this.getHandler("password")}
          placeholder="password"
        ></TextInput>
        <Button title="Sign up" onPress={this.createnewuser}></Button>
        <Button
          title="Already have an account? Sign in!"
          onPress={this.gotosignin}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
    width: "90%",
    borderColor: "steelblue",
  },
});
