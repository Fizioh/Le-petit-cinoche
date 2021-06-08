import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                />
                <button>Rechercher</button>
            </div>
        )
    }
}
export default SearchBar;