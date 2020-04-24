import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import * as firebase from 'firebase';

export class SigninScreen extends React.Component {

state={
  email: '',
  password: '',
}

getHandler = key => val => {
  this.setState({[key]: val})
}

gotosignup = () => {
    this.props.navigation.navigate('Signup');
}

loginuser = () => {
  let handlestate =   this.props.handlestate
  let email= this.state.email.trim()
  let password= this.state.password.trim()
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
    handlestate()
    }, function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
  });
}


render(){
  return(
  <View style={styles.container}>
  <TextInput
  autoCapitalize="none"
  textContentType ="emailAddress"
  keyboardType="email-address"
  style={styles.input}
  value={this.state.email}
  onChangeText={this.getHandler('email')}
  placeholder="email"
  >
  </TextInput>
  <TextInput
  secureTextEntry={true}
  style={styles.input}
  value={this.state.password}
  onChangeText={this.getHandler('password')}
  placeholder="password"
  >
  </TextInput>
  <Button title='Sign in' onPress={this.loginuser} navigation={this.props.navigation}></Button>
  <Button title="Don't have an account? Sign up!" onPress={this.gotosignup}></Button>
  </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
    width: '90%',
    borderColor: 'steelblue',
  },
});
