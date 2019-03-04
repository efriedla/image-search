import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';

class App extends React.Component {
    state = { images: []}
    onSearchSubmit = async term => {
       const response = await Unsplash.get('/search/photos', {
            params : { query: term },
           
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