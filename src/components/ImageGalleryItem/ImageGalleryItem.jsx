import PropTypes from 'prop-types';
import { StyledGalleryItem, StyledImage } from './ImageGalleryItem.styled';

const ImageGalleryItem= ({cards, onClick})=> {
    return cards.map((element, id) => {
        return  <StyledGalleryItem key = {element.id}>
                    <StyledImage src= {element.webformatURL}  alt={element.tags} data-id= {id} onclick={onClick} loading="lazy" />
            </StyledGalleryItem>
    })
}

ImageGalleryItem.protoType = {
    card: PropTypes.array.isRequired, 
    onClick: PropTypes.func.isRequired, 
}
export default ImageGalleryItem;