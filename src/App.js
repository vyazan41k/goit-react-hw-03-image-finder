// import "./App.css";
import './App.css';
import React, { Component } from 'react';
import API from './services/pixabiApi';

// components
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loading from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    picturs: [],
    page: 1,
    query: '',
    loading: false,
    modal: false,
    large: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPictures();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({
      query: query,
      picturs: [],
      page: 1,
    });
  };

  fetchPictures = () => {
    const { query, page } = this.state;
    const options = {
      query,
      page,
    };

    this.setState({ loading: true });

    API.fetchPictures(options)
      .then(picturs =>
        this.setState(prev => ({
          picturs: [...prev.picturs, ...picturs],
          page: prev.page + 1,
        })),
      )
      .finally(() => this.setState({ loading: false }));
  };

  toogleModal = e => {
    this.setState(({ modal }) => ({ modal: !modal, large: e }));
  };

  openPictur = e => {
    this.toogleModal(e);
  };

  render() {
    const { picturs, loading, modal, large } = this.state;

    return (
      <>
        {modal && <Modal onClose={this.toogleModal}>{large}</Modal>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery data={picturs} open={this.openPictur} />

        {loading && <Loading />}

        {picturs.length > 0 && !loading && (
          <Button onClick={this.fetchPictures} />
        )}
      </>
    );
  }
}

export default App;
