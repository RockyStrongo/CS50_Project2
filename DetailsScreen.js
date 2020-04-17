import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export class DetailsScreen extends React.Component {


  render(){
    const { movietitle } = this.props.route.params;
    const { movieyear } = this.props.route.params;
    const { movieimdbID } = this.props.route.params;
    const { moviePoster } = this.props.route.params;

    return(
      <View>
      <Text>Title: {movietitle+"\n"}
      Year: {movieyear+"\n"}
      Poster:
      </Text>
      <Image
        style={styles.poster}
        source={{
          uri: moviePoster,
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 300,
    height: 300,
  },
});
