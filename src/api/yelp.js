import axios from 'axios';
import { api_key } from './yelp_api_key.json';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${api_key}`,
    'Access-Control-Allow-Origin': '*'
  }
});
