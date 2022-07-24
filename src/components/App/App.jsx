import { searchImages } from '../../services/api';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { HelpText, Wrapper } from './App.styled';
import { LoadMore } from 'components/ButtonLoadMore/LoadMore';
import { Spiner } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    dataGallery: [],
    status: 'idle',
    error: null,
  };

  page = null;
  searchData = '';
  totalElSearch = null;

  onSearch = ({ searchData }, { resetForm }) => {
    if (searchData.trim() === '') {
      alert('Please enter a query keyword');
      return;
    }

    this.totalElSearch = null;
    this.page = 1;
    this.searchData = searchData;
    this.setState({ status: 'pending' });

    searchImages(searchData, this.page)
      .then(dataSearch => {
        if (dataSearch.hits.length === 0) {
          this.totalElSearch = null;
          this.setState({ dataGallery: [] });
          return Promise.reject(
            `Can't find ${searchData} :-(, try something else`
          );
        } else {
          this.totalElSearch = dataSearch.totalHits;
          this.setState({
            dataGallery: dataSearch.hits,
            error: null,
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ status: 'resolved' }));

    resetForm();
  };

  onLoadMore = () => {
    this.page += 1;

    this.setState({ status: 'pending' });

    searchImages(this.searchData, this.page)
      .then(dataSearch => {
        this.setState(prevState => ({
          dataGallery: [...prevState.dataGallery, ...dataSearch.hits],
        }));
      })
      .finally(this.setState({ status: 'resolved' }));
  };

  render() {
    const { dataGallery, status, error } = this.state;
    return (
      <Wrapper>
        <SearchBar onSearch={this.onSearch} />

        {status === 'idle' && (
          <HelpText>
            Please enter a keyword to display a collection of pictures!!!
          </HelpText>
        )}

        {status === 'resolved' && dataGallery.length !== 0 && (
          <ImageGallery dataGalleryArray={dataGallery} />
        )}

        {status === 'pending' && <Spiner />}

        {error && <HelpText>{error}</HelpText>}

        {dataGallery.length < this.totalElSearch && (
          <LoadMore onLoadMore={this.onLoadMore} />
        )}
      </Wrapper>
    );
  }
}
