import React from 'react';
import './List.css';
import ImageCard from './ImageCard';

const List = (props) => {
    console.log(props.images);
   const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    return(
        <div className="image-list">
        {images}
        </div>

    )
}

export default List;