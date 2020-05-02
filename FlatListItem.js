import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export class FlatListItem extends React.Component {
  touchmovie = () => {
    this.props.navigation.navigate("Details", {
      movietitle: this.props.item.Title,
      movieyear: this.props.item.Year,
      movieimdbID: this.props.item.imdbID,
      moviePoster: this.props.item.Poster,
      dataarray: this.props.dataarray,
      thisindex: this.props.thisindex,
    });
  };

  render() {
    return (
      <View style={styles.movielistview}>
        <TouchableOpacity onPress={this.touchmovie}>
          <Text style={styles.movielist}>{this.props.item.Title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movielistview: {
    justifyContent: "flex-start",
  },
  movielist: {
    textAlign: "left",
    fontSize: 20,
    margin: 10,
  },
});
