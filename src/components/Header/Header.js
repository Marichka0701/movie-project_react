import React, {useContext, useState} from 'react';
import Switch from "react-switch";

import '../reset.css';
import styles from './Header.module.css';
import logo from './images/logo.png';
import UserInfo from "../UserInfo/UserInfo";
import {useNavigate} from "react-router-dom";
import {MainRoutes} from "../../routing/MainRoutes/MainRoutes";
import {Context} from "../../HOC/ContextProvider";
const Header = () => {
    const {context, setContext} = useContext(Context);

    const [theme, setTheme] = useState('light');
    const handleChange = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
        setContext(theme);
    }
    const navigateToMovies = useNavigate();
    const navigateToGenres = useNavigate();

    const handleMoviesClick = () => {
        navigateToMovies(`${MainRoutes.movie}`)
    };

    const handleGenresClick = () => {
        navigateToGenres(`${MainRoutes.genres}`)
    };

    return (
        <div className={`${styles.header} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>
            <div>
                <img className={styles.logo} src={logo} alt="logo movie icon"/>
            </div>
            <ul className={styles.options}>
                <li onClick={handleMoviesClick} className={`${styles.options_item} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>Movies</li>
                <li onClick={handleGenresClick} className={`${styles.options_item} ${context === 'light' ? `${styles.light}` : `${styles.night}`}`}>Genres</li>
            </ul>
            <div className={styles.left}>
                <UserInfo/>
                <Switch
                    onChange={handleChange}
                    checked={theme === 'dark'}
                    color={'blue'} onColor={'black'}
                    checkedIcon={<img className={styles.nightMode}
                                      src='https://img.icons8.com/ios/50/partly-cloudy-night--v1.png'
                                      alt="night mode icon"/>}
                    uncheckedIcon={<img className={styles.lightMode}
                                        src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"
                                        alt="light mode icon"/>}
                /></div>
        </div>
    );
};

export default Header;