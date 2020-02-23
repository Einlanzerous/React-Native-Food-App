import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={ term } 
        onTermChange={ setTerm }
        onTermSubmit={ () => searchApi(term) }
      />
      { errorMessage ? <Text>{ errorMessage }</Text> : null }
      <ScrollView>
        <ResultsList
          results={ filterResultsByPrice('$') }
          title='Cheap'
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Mid-Range'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Upscale'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;