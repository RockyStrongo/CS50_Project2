import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { FlatListItem } from "./FlatListItem.js";
import * as firebase from "firebase";

export class SearchScreen extends React.Component {
  state = {
    searchstring: "",
    data: [],
    pagenumber: 1,
  };

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  };

  saveSearchHistory = (string) => {
    var d = new Date();
    var n = d.toJSON();

    // Get a key for a new search.
    var newSearchKey = firebase.database().ref().child("searchhistory").push()
      .key;

    firebase
      .database()
      .ref("searchhistory/" + firebase.auth().currentUser.uid)
      .push(
        {
          searchstring: string,
          datetime: n,
        },
        function (error) {
          if (error) {
            alert(error);
          } else {
            // Data saved successfully!
          }
        }
      );
  };

  searchMovies = async () => {
    var searchstring = this.state.searchstring;
    searchstring = searchstring.trim();
    const url = "http://www.omdbapi.com/?apikey=15048729&s=" + searchstring;
    const response = await fetch(url);
    const json = await response.json();
    if (json.Response == "False") {
      alert(json.Error);
    } else {
      this.setState({ data: json.Search });
      this.saveSearchHistory(searchstring);
    }
  };

  openmodal = () => {
    this.props.navigation.navigate("Modal");
  };

  opendrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          animated="true"
          hidden="false"
          showHideTransition="slide"
        />
        <TextInput
          style={styles.input}
          returnKeyType="search"
          value={this.state.searchstring}
          onChangeText={this.getHandler("searchstring")}
          placeholder="Search"
          onSubmitEditing={this.searchMovies}
        ></TextInput>
        <TouchableOpacity onPress={this.searchMovies}>
          <Text style={{ fontSize: 20, color: "blue" }}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <FlatListItem
              navigation={this.props.navigation}
              item={item}
              thisindex={index}
              dataarray={this.state.data}
            />
          )}
        />
        <TouchableOpacity
          onPress={this.openmodal}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            position: "absolute",
            bottom: 30,
            right: 30,
            height: 70,
            backgroundColor: "steelblue",
            borderRadius: 100,
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Button title="..." onPress={this.opendrawer}></Button>
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
