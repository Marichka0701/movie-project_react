import React, {useEffect, useState} from 'react';

import '../reset.css';
import styles from './MovieListCardDetails.module.css';
import PosterPreview from "../ PosterPreview/PosterPreview";
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movie.service";
import StarsRatings from "../StarsRating/StarsRating";
import GenreBadge from "../GenreBadge/GenreBadge";

const MovieListCardDetails = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [genres_ids, setGenres_ids] = useState([]);
    const [triggerForRender, setTriggerForRender] = useState(false);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        movieService.getMovieById(id)
            .then(response => {
                setMovie(response.data);
                setTriggerForRender(prev => !prev);
            })
    }, [])

    useEffect(() => {
        setGenres_ids(movie?.genres?.map(item => item.id));
    }, [triggerForRender])

    const {
        original_language,
        overview,
        title,
        vote_average,
        budget,
        runtime,
        release_date,
    } = movie;

    const convertMinutesToHoursAndMinutes = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`
    }

    const handleClick = () => {
        setHidden(prev => !prev);
    }

    return (
        genres_ids &&
        <div className={styles.movieCardDetails}>
            <PosterPreview movie={movie}/>
            <div className={styles.info}>
                <div className={styles.date}>
                    <p>{release_date}</p>
                </div>
                <div className={styles.titleAndRating}>
                    <h3 className={styles.title}>{title}</h3>
                    <StarsRatings stars={vote_average}/>
                </div>
                <div className={styles.languagesAndGenres}>
                    <p className={styles.lang}>{original_language}</p>
                    <p className={styles.runtime}>{convertMinutesToHoursAndMinutes(runtime)}</p>
                    <GenreBadge genres_ids={genres_ids}/>
                </div>
                <div onClick={handleClick} className={`${styles.overview} ${hidden ? '' : `${styles.hidden}`}`}>
                    <p>{overview}</p>
                </div>
                <div className={styles.budget}>
                    <p>Budget: {budget}💸</p>
                </div>
            </div>
        </div>
    );
};

export default MovieListCardDetails;