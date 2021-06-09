import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
       this.state = {
        placeholder: 'Search Bar',
        inputValue: ''
        }
    }
    handleChange(event){
        this.setState({ inputValue: event.target.value })
    }
    render(){
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    plcaholder={this.state.placeholder}
                />

                <button onClick={this.handleClick.bind(this)}>Rechercher</button>
            </div>
        )
    }
    handleClick(){
        this.props.callback(this.state.inputValue)
    }
}
export default SearchBar;