import React, {useEffect, useState} from 'react';

import '../../components/reset.css';
import styles from './GenresPage.module.css';
import {genreService} from "../../services/genre.service";
import {movieService} from "../../services/movie.service";
import PosterPreview from "../../components/ PosterPreview/PosterPreview";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import {useNavigate} from "react-router-dom";

const GenresPage = () => {
    const [genresList, setGenresList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [moviesList, setMoviesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        genreService.getAllGenres()
            .then(response => setGenresList(response.data.genres));
    }, [])

    const handleClick = (item) => {
        setSelectedGenre(item.id);
    };

    useEffect(() => {
        movieService.getMovieByGenre(currentPage, selectedGenre)
            .then(response => setMoviesList(response.data.results));
    }, [selectedGenre, moviesList])

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

    const navigate = useNavigate();
    const handleClickCard = (movie) => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className={styles.genresPage}>
            <ul className={styles.list}>
                {
                    genresList.map(item => <li
                        onClick={() => handleClick(item)}
                        key={item.id}
                        className={styles.list_item}
                    >{item.name}</li>)
                }
            </ul>
            {
                moviesList &&
                <div>
                    <div className={styles.movies_lists}>
                        {
                            moviesList.map(movie =>
                                <div onClick={() => handleClickCard(movie)} className={styles.movie_card}>
                                    <PosterPreview movie={movie}/>
                                    <MovieInfo movie={movie}
                                    />
                                </div>)
                        }
                    </div>
                    <div className={styles.pagination}>
                        <button
                            disabled={currentPage === 1}
                            onClick={handlePrevClick}
                            className={styles.prev}
                        >Previous
                        </button>
                        <p className={styles.currentPage}>{currentPage}</p>
                        <button
                            onClick={handleNextClick}
                            className={styles.next}
                        >Next
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default GenresPage;