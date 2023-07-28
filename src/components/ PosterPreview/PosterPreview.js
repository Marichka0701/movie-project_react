import React from 'react';

import '../reset.css';
import styles from './PosterPreview.module.css';
import {imageURL} from "../../configs/urls";

const PosterPreview = ({movie}) => {
    const {poster_path, title} = movie;

    return (
        <img className={styles.img} src={`${imageURL}${poster_path}`} alt={title} />
    );
};

export default PosterPreview;