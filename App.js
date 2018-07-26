/*Developer R.Aaron Kapinski
*Note pad application in react native
*/


Notepad/App.js

     
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Note from './app/components/Note';

export default class App extends React.Component {

    state = {
      //note array for text
        noteArray: [],
        noteText: '',
    }

  render() {

    //create the current state fo the note array
      Let: notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} keyval={key} val={val} deleteMethod={ ()=> this.deleteNote(key)} />
      });

      return (

        //set up the sytle view for 
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>- Gotcha Pad -</Text>
            </View>
           
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>

            <View style={styles.footer}>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButtom}>
                    <Text style={styles.addButtomText}>+</Text>
                </TouchableOpacity>

                <TextInput style={styles.textInput}
                  onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
                  placeholder='> nota' placeholderTextColor='white' underlineColor='transparent'>
                </TextInput>

            </View>

        </View>
      );
    }

    //start add Note
    addNote(){
        if(this.state.noteText){
          var data = new Date();
          
          if(data.getMonth() <= 9){
              var sep = "/0";
          }

          this.state.noteArray.push( {date: data.getDate() + sep + data.getMonth() + "/" + data.getFullYear(), 'note': this.state.noteText} );
          this.setState({ 'noteArray': this.state.noteArray})
          this.setState({ 'noteText': ''  });
        }
    }
    deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({'noteArray': this.state.noteArray});
    }
}

//***Start of Style sheet */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#0d0d0de',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#cccccc',
  },
  headerText:{
    color: ' #1aff1a',
    fontSize: 16,
    padding: 28,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButtom:{
    backgroundColor: ' #b3ffb3',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtomText:{
    color: '#001a00',
    fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#66ff66',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#000000',
  },
});