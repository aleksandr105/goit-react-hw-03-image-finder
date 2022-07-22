import { searchImages } from '../../services/api';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { HelpText, Wrapper } from './App.styled';
import { LoadMore } from 'components/ButtonLoadMore/LoadMore';
import { Spiner } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    dataGallery: null,
  };

  onSearch = ({ searchData }, { resetForm }) => {
    if (searchData.trim() === '') {
      alert('Please enter a query keyword');
      return;
    }
    searchImages(searchData)
      .then(dataSearch =>
        dataSearch.hits.length
          ? this.setState({ dataGallery: dataSearch.hits })
          : this.setState({ dataGallery: null })
      )
      .catch(error => console.log(error));
    resetForm();
  };

  render() {
    const { dataGallery } = this.state;
    return (
      <Wrapper>
        <SearchBar onSearch={this.onSearch} />
        {!dataGallery && (
          <HelpText>
            Please enter a keyword to display a collection of pictures!!!
          </HelpText>
        )}
        {dataGallery && <ImageGallery dataGalleryArray={dataGallery} />}
        <Spiner />
        <LoadMore />
      </Wrapper>
    );
  }
}
