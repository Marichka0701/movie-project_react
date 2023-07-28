import React from 'react';

import '../../components/reset.css';
import styles from './MainLayout.module.css';
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;