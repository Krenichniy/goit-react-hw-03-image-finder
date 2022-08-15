import PropTypes from 'prop-types';

const ImageGalleryItem= ({id, web, largeImg, tags})=> {
    return (
        <>
            <li key = {id}>
                <a  href={largeImg}>
                    <img src= {web}  alt={tags} loading="lazy" />
                </a>
            </li>
        </>
    )
}

ImageGalleryItem.protoType = {
    id: PropTypes.string.isRequired, 
    largeImg: PropTypes.string.isRequired, 
    web: PropTypes.string.isRequired, 
    tags: PropTypes.string.isRequired, 
}
export default ImageGalleryItem;