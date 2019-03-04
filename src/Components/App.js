import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params : { query: term },
            headers : {
                Authorization: ''
            }
        });
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}
export default App;