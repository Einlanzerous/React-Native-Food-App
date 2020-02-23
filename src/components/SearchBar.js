import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={ styles.backgroundStyle }>
      <Feather name="search" style={ styles.iconStyle } />
      <TextInput
        autoCorrect={ false }
        style={ styles.inputStyle }
        placeholder="Search"
        value={ term }
        onChangeText={ onTermChange }
        onEndEditing={ onTermSubmit }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5, 
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;