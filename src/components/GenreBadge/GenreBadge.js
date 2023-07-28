import React, {useEffect, useState} from 'react';

import '../reset.css';
import styles from './GenreBadge.module.css';
import {genreService} from "../../services/genre.service";

const GenreBadge = ({genres_ids}) => {
    const [allGenres, setAllGenres] = useState([]);
    const [filteredGenresArray, setFilteredGenresArray] = useState([]);

    useEffect(() => {
        genreService.getAllGenres()
            .then(response => setAllGenres(response.data.genres))
    }, []);

    useEffect(() => {
        // перетин масивів, щоб знайти назви ід жанрів
        setFilteredGenresArray(allGenres.filter(x => genres_ids?.indexOf(x.id) !== -1));
    }, [allGenres])

    return (
        <div className={styles.genres}>
            {
                filteredGenresArray?.map(item => <div key={item.name} className={styles.genre}>{item.name}</div>)
            }
        </div>
    );
};

export default GenreBadge;