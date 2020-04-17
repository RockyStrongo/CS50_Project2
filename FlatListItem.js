import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';


export class FlatListItem extends React.Component {

touchmovie = () =>{
  this.props.navigation.navigate('Details', {
            movietitle: this.props.item.Title,
            movieyear: this.props.item.Year,
            movieimdbID: this.props.item.imdbID,
            moviePoster: this.props.item.Poster
          })
}

render(){
  return(
  <View>
  <TouchableOpacity onPress={this.touchmovie}>
  <Text style = {styles.movielist}>{this.props.item.Title}</Text>
  </TouchableOpacity>
  </View>
  )
}

}

const styles = StyleSheet.create({
  movielist :{
    fontSize: 20,
    margin: 10,
  },
});
