import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAoFQt8hCyBCVHjseiqzUgOxd9KruE_4AI';

YTSearch({key: API_KEY, term: 'BTS'}, function(data) {
    console.log(data);
});

// Create a component.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Put HTML in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));