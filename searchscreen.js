import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';
import {FlatListItem} from './FlatListItem.js'

export class SearchScreen extends React.Component {

  state = {
  searchstring: '',
  data: [],
};

getHandler = key => val => {
  this.setState({[key]: val})
}

/*componentDidMount() {
  this.fetchData();
}*/

searchMovies = async () => {
  var searchstring = this.state.searchstring;
  searchstring = searchstring.trim()
  const url= "http://www.omdbapi.com/?apikey=15048729&s="+searchstring
  const response = await fetch(url);
  const json = await response.json();
  if(json.Response == 'False'){
    alert(json.Error)
  } else {
      this.setState({ data: json.Search });
  }
};


  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={styles.input}
      //keyboardType = 'web-search'
      value={this.state.searchstring}
      onChangeText={this.getHandler('searchstring')}
      placeholder="Search"
      ></TextInput>
      <Button
      titleStyle={{
      fontSize: 50,
      }}
      title='Search'
      onPress={this.searchMovies}></Button>
        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          renderItem={({ item, index }) =>
            <FlatListItem navigation={this.props.navigation} item={item} thisindex={index} dataarray={this.state.data}/>}
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
    width: '90%',
    borderColor: 'steelblue',
  },

});
