import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
var {ClientIDUnsplash} = require('./Keys');

class App extends React.Component {
    state = { images: []}
    onSearchSubmit = async term => {
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params : { query: term },
            headers : {
                Authorization: `Client-ID ${ClientIDUnsplash}`
            }
        });
        this.setState({ images : response.data.results });
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
               <h3>found: {this.state.images.length} images</h3>
            </div>
        )
    }
}
export default App;