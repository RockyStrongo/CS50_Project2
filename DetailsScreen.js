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

  closestack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <View style={{ alignItems: "flex-end", marginRight: 5 }}>
          <Button title="x" onPress={this.closestack} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.detailtext}>
            {this.dataarray[this.state.currentindex].Title}
          </Text>
          <Text style={styles.detailtext}>
            {this.dataarray[this.state.currentindex].Year}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button
              style={{ fontSize: 50 }}
              title="<"
              disabled={this.state.prevbuttondisabled}
              onPress={this.prevbutton}
            />
            <Image
              style={styles.poster}
              source={{
                uri: this.dataarray[this.state.currentindex].Poster,
              }}
            />
            <Button
              title=">"
              disabled={this.state.nextbuttondisabled}
              onPress={this.nextbutton}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailtext: {
    fontSize: 20,
    paddingTop: 10,
  },
  poster: {
    margin: 10,
    width: 300,
    height: 300,
  },
});
