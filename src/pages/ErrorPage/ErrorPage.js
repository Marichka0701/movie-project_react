import React from 'react';

import '../../components/reset.css';
import styles from './ErrorPage.module.css';
const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <img src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
                 alt="404 not found mem"
                 className={styles.image}
            />
        </div>
    );
};

export default ErrorPage;