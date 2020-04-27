import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export class DetailsScreen extends React.Component {
  dataarray = this.props.route.params.dataarray;
  dataindex = this.props.route.params.thisindex;

  state = {
    currentindex: this.dataindex,
    nextbuttondisabled: false,
    nextbuttondisabled: false,
  };

  componentDidMount() {
    if (this.state.currentindex == this.dataarray.length - 1) {
      this.setState((prevState) => ({ nextbuttondisabled: true }));
    }
    if (this.state.currentindex == 0) {
      this.setState((prevState) => ({ prevbuttondisabled: true }));
    }
  }

  nextbutton = () => {
    this.setState((prevState) => ({
      currentindex: prevState.currentindex + 1,
    }));
    if (this.state.currentindex + 1 == this.dataarray.length - 1) {
      this.setState((prevState) => ({ nextbuttondisabled: true }));
    }
    if (this.state.currentindex + 1 != 0) {
      this.setState((prevState) => ({ prevbuttondisabled: false }));
    }
  };

  prevbutton = () => {
    this.setState((prevState) => ({
      currentindex: prevState.currentindex - 1,
    }));
    if (this.state.currentindex - 1 == 0) {
      this.setState((prevState) => ({ prevbuttondisabled: true }));
    }
    if (this.state.currentindex - 1 != this.dataarray.length - 1) {
      this.setState((prevState) => ({ nextbuttondisabled: false }));
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.detailtext}>
          Title: {this.dataarray[this.state.currentindex].Title + "\n"}
          Year: {this.dataarray[this.state.currentindex].Year + "\n"}
          Poster:
        </Text>
        <Image
          style={styles.poster}
          source={{
            uri: this.dataarray[this.state.currentindex].Poster,
          }}
        />
        <Button
          title="Previous"
          disabled={this.state.prevbuttondisabled}
          onPress={this.prevbutton}
        />
        <Button
          title="Next"
          disabled={this.state.nextbuttondisabled}
          onPress={this.nextbutton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailtext: {
    fontSize: 20,
    padding: 10,
  },
  poster: {
    marginLeft: 10,
    width: 300,
    height: 300,
  },
});
