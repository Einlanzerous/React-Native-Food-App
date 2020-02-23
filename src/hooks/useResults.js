import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Hits Yelp with a GET request for businesses matching the searchTerm
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'raleigh',
          limit: 50
        }
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      console.log(JSON.stringify(err));
      setErrorMessage('Something went wrong with your request, please try again later.');
    }
  }

  // Load screen on first render with default search term
  useEffect(() => {
    searchApi('american');
  }, []);

  return [searchApi, results, errorMessage];
}
