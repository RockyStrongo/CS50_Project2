import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';

export class FlatListItem extends React.Component {

touchmovie = () =>{
  alert (this.props.item.Title)
}

render(){
  return(
  <View>
  <TouchableOpacity onPress={this.touchmovie}>
  <Text style = {styles.movielist}>{`${this.props.item.Title} - Year: ${this.props.item.Year}`}</Text>
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
