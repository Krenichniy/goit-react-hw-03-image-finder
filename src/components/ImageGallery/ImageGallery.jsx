import { Component } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';
// import ImageGalleryItem from "components/ImageGalleryItem";

class ImageGallery extends Component {
    state = {
        imagesArr:[]
    }
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.imageName !== this.props.imageName) {
                fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=27990741-9fab199c60b940a6a95dff2fa&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res=> res.json())
                .then(image=> {
                    console.log(image.hits);
                    this.setState({imagesArr:image.hits})
                })
                // .finally(()=> this.setState({loading:false}))
        }
    }

    render() {
        const { imagesArr } = this.state;
        const {  onClick } = this.props;
        return(
            <>
                <StyledImageGallery >
                    <ImageGalleryItem cards={imagesArr} onClick={onClick} />
                </StyledImageGallery>
            </>
        )
    } 
}

export default ImageGallery;
