import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
 async onSearchSubmit(term) {
    const url = '/search/photos';
    const response = await unsplash.get(url, {
      params: { query: term }
    });
  
    this.setState({ images: response.data.results });
  }
 
  render() {
    return (
      <div className='ui container' style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
  

export default App;
