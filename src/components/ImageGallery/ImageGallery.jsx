import { Component } from "react";
// import ImageGalleryItem from "components/ImageGalleryItem";

class ImageGallery extends Component {
    state = {
        imagesArr:[]
    }
    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.imageName !== this.props.imageName) {
                fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=27990741-9fab199c60b940a6a95dff2fa&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res=> res.json())
                .then(image=> {
                    console.log(image);
                    this.setState({imagesArr:image.hits})
                })
                // .finally(()=> this.setState({loading:false}))
        }
    }

    render(){
        return(
            <>
                <ul >
                    {

                        <div>{this.props.imageName}</div>

                        // this.state.imagesArr.map((element) => {
                        // const { id, webformatURL, largeImageURL, tags } = element;
                        // return <ImageGalleryItem key={id} id={id} web={webformatURL} largeImg={largeImageURL} tags={tags}></ImageGalleryItem>
                        // })
                    }
                    {
                        <div>{this.state.imagesArr[0].user}</div>
                    }
                </ul>
            </>
        )
    }
        
}

export default ImageGallery;