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
    page: 1,
    searchText: '',
    totalElSearch: null,
  };

  onSearch = ({ searchData }, { resetForm }) => {
    if (searchData.trim() === '') {
      alert('Please enter a query keyword');
      return;
    }
    if (this.state.searchText === searchData) {
      alert('request is the same as before');
      return;
    }
    this.setState({
      searchText: searchData,
      status: 'pending',
      page: 1,
      totalElSearch: null,
      dataGallery: [],
    });

    resetForm();
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page &&
      prevState.searchText === this.state.searchText
    ) {
      searchImages(this.state.searchText, this.state.page)
        .then(dataSearch => {
          this.setState(prevState => ({
            dataGallery: [...prevState.dataGallery, ...dataSearch.hits],
          }));
        })
        .finally(this.setState({ status: 'resolved' }));
    }

    if (prevState.searchText !== this.state.searchText) {
      searchImages(this.state.searchText, this.state.page)
        .then(dataSearch => {
          if (dataSearch.hits.length === 0) {
            return Promise.reject(
              `Can't find ${this.searchText} :-(, try something else`
            );
          } else {
            this.setState({
              dataGallery: dataSearch.hits,
              error: null,
              totalElSearch: dataSearch.totalHits,
            });
          }
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ status: 'resolved' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { dataGallery, status, error, totalElSearch } = this.state;
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

        {dataGallery.length < totalElSearch && status !== 'pending' && (
          <LoadMore onLoadMore={this.onLoadMore} />
        )}
      </Wrapper>
    );
  }
}
