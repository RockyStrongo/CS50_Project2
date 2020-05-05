import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";
import APIKeys from "./APIkeys.js";

import * as firebase from "firebase";

export class SearchHistoryScreen extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.testFirebaseDB();
  }

  /*
  //only check once
  testFirebaseDB = () => {
    var userId = firebase.auth().currentUser.uid;
    const that = this;
    return firebase
      .database()
      .ref("/searchhistory/" + userId)
      .once("value")
      .then(function (snapshot) {
        var searchdata = snapshot.val();
        that.setState({ data: searchdata });
      });
  };
*/

  //listen to changes
  testFirebaseDB = () => {
    const that = this;
    var userId = firebase.auth().currentUser.uid;
    var searchHistoryRef = firebase.database().ref("searchhistory/" + userId);
    searchHistoryRef.on("value", function (snapshot) {
      var searchdata = snapshot.val();
      that.setState({ data: searchdata });
    });
  };

  render() {
    if (this.state.data) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>
            {Object.values(this.state.data).map((searchhistory, key) => (
              <Text key={key}>
                {searchhistory.datetime + " - " + searchhistory.searchstring}
              </Text>
            ))}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Nothing yet</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
