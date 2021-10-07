import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAoFQt8hCyBCVHjseiqzUgOxd9KruE_4AI';

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