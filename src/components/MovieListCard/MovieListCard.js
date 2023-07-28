import React from 'react';
import {useNavigate} from "react-router-dom";

import '../reset.css';
import styles from './MovieListCard.module.css';
import PosterPreview from "../ PosterPreview/PosterPreview";
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieListCard = ({movie}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div onClick={handleClick} className={styles.movieCard}>
            <PosterPreview movie={movie}/>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MovieListCard;