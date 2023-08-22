import { React } from 'react';
import { useEffect } from 'react';

import './App.css';
import searchIcon from './search.svg';

//apiKey : 694d97c2
const API_URL = 'http://omdbapi.com?apikey=694d97c2';

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return(
        <h1>App</h1>
    )
}

export default App;