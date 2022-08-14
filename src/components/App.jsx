import React, { Component } from 'react';
import SearchBar from './Searchbar';
// import ImageGallery from './ImageGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThreeDots  } from 'react-loader-spinner';
import { Container } from "./App.stylede";


class App extends Component {
  state={
    BASE_URL: 'https://pixabay.com/api/',
    query:{
      q:null,
      page:1,
      perpage:12,
      id:1,
      webformatURL: null,
      largeImageURL: null
    }, 
    loading:false,
    image:null
  }
  componentDidMount(){
    // const {BASE_URL, query:{page, perpage, id, webformatURL, largeImageURL}}= this.state;
    // `${BASE_URL}?${page}&${perpage}& ${id}&${webformatURL}&${largeImageURL}`
    this.setState({loading:true});
    setTimeout(()=> {

      fetch('https://pixabay.com/api/?q=cat&page=1&key=27990741-9fab199c60b940a6a95dff2fa&image_type=photo&orientation=horizontal&per_page=12')
      .then(res=> res.json)
      .then(image=> this.setState({image}))
      .finally(()=> this.setState({loading:false}))
    }, 2000)

  }

  showValidationMessage = (message) => {
    Notify.warning(message);
}

  onSubmitHandler= ({imageName})=> {
      console.log(imageName);
  }
  render(){
    return (
      <Container>
        
        <SearchBar onSubmit={this.onSubmitHandler} onValidation = {this.showValidationMessage}></SearchBar>
        {/* <ImageGallery></ImageGallery> */}
        {this.state.loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
        {this.state.image && <div>{'React homework template'}</div>}
            </Container>
    );
  }
 
};

export default App;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageUR
// page -1
// perpage-12