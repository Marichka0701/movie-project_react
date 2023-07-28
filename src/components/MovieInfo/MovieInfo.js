import React, {useContext} from 'react';

import '../reset.css';
import styles from './MovieInfo.module.css';
import GenreBadge from "../GenreBadge/GenreBadge";
import StarsRatings from '../StarsRating/StarsRating';
import {Context} from "../../HOC/ContextProvider";

const MovieInfo = ({movie}) => {
    const {
        original_language,
        overview,
        title,
        vote_average,
        genre_ids,
    } = movie;

    const {context} = useContext(Context);

    return (
        <div className={styles.info}>
            <div className={styles.titleAndRating}>
                <h3 className={`${styles.title} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>{title}</h3>
                <StarsRatings stars={vote_average}/>
            </div>
            <div className={styles.languagesAndGenres}>
                <p className={`${styles.lang} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>{original_language}</p>
                <GenreBadge genres_ids={genre_ids}/>
            </div>
            <div className={styles.overview}>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;