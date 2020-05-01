import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { LinearGradient } from "expo-linear-gradient";

export class DetailsScreen extends React.Component {
  dataarray = this.props.route.params.dataarray;
  dataindex = this.props.route.params.thisindex;

  state = {
    currentindex: this.dataindex,
  };

  closestack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#134E5E", "#71B280"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        >
          <ViewPager
            style={styles.viewPager}
            initialPage={this.state.currentindex}
          >
            {this.dataarray.map((movie, key) => (
              <View key={key}>
                <View style={styles.centeredview}>
                  <Text style={styles.detailtext}>{movie.Title}</Text>
                  <Text style={styles.detailtext}>{movie.Year}</Text>
                  <Image
                    style={styles.poster}
                    source={{
                      uri: movie.Poster,
                    }}
                  />
                </View>
              </View>
            ))}
          </ViewPager>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredview: {
    alignItems: "center",
  },
  detailtext: {
    fontSize: 20,
    paddingTop: 10,
  },
  poster: {
    margin: 10,
    width: 270,
    height: 400,
  },
  viewPager: {
    flex: 1,
    marginTop: 30,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
