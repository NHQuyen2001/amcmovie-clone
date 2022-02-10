import React from "react";
// Styles
import {Image, Title} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, title}) => {
    return (
        <div>
            <Image src={image} alt='movie-thumb'/>
            <Title>{title}</Title>
        </div>
    )
};

export default Thumb;