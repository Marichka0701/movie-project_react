import React, {useContext, useEffect, useState} from 'react';

import '../reset.css';
import styles from './MoviesList.module.css';
import {movieService} from "../../services/movie.service";
import MovieListCard from "../MovieListCard/MovieListCard";
import {Context} from "../../HOC/ContextProvider";

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {context} = useContext(Context);

    useEffect(() => {
        (movieService.getMoviesList(currentPage)
                .then(response => setMoviesList(response.data.results)));
    }, [moviesList])

    const handleNextClick = () => {
        setCurrentPage(prev => prev + 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePrevClick = () => {
        setCurrentPage(prev => prev - 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={`${styles.container} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>
                {
                    moviesList.map(item => <MovieListCard key={item.id} movie={item}/>)
                }
                <div className={styles.pagination}>
                    <button
                        disabled={currentPage === 1}
                        onClick={handlePrevClick}
                        className={`${styles.prev} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}
                    >Previous
                    </button>
                    <p className={`${styles.currentPage} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>{currentPage}</p>
                    <button
                        onClick={handleNextClick}
                        className={`${styles.next} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}
                    >Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default MoviesList;