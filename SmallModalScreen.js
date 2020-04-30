import React from "react";
import { View, Text, Button } from "react-native";

export class SmallModalScreen extends React.Component {
  closemodal = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            height: "20%",
            width: "100%",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button title="X" onPress={this.closemodal}></Button>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Testing a modal with transparent background
          </Text>
        </View>
      </View>
    );
  }
}
