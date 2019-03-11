import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import List from './List';
import Navbar from './Navbar';

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
            <div>
                <Navbar />
                <div className="ui container">
                    
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                <h3>found: {this.state.images.length} images</h3>
                <List images={this.state.images}/>
                </div>
            </div>
        )
    }
}
export default App;