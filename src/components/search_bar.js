import React, { Component } from 'react';

// Functional Based Component
// const SearchBar = () => {
//     return <input />;
// }

// Class Based Component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; // initialize state
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
    
    // render() {
    //     return <input onChange={this.onInputChange} />;
    // }

    // // declare Event handler
    // // Naming Rule : handle/on + Element + Event
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;