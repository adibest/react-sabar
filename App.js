import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native';

export default class App extends Component{

  state = {
    todo: '',
    data: [
      {text: 'Eating'},
      {text: 'Shopping'},
      {text: 'Studying'},
      {text: 'Reciting'},
    ],
  };

  handleInput(arg) {
    this.setState({
      todo: arg
    });
  }

  sendData() {
    let pack = {text: this.state.todo};

    this.setState({
      data: [...this.state.data, pack]
    })
  }

  render() {
    return(
      <View style={styles.container}>

        <Text style={styles.title}>This is to do list</Text>

        <View style={styles.wrapper}>
          <FlatList 
            data={this.state.data}
            keyExtractor={(alias,index) => index.toString()}
            renderItem={ (alias) => (
                <Text>
                  {alias.item.text}
                </Text>
              ) }
          />
        </View>
        
        <TextInput 
          style={styles.input}
          placeholder="What do you think?"
          onChangeText={ (text) => this.handleInput(text) }
        />

        <Button
          title="submit"
          onPress={ () => this.sendData() }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  wrapper: {
    marginBottom: 20,
    width: '80%',
  }
});