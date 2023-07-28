import React, {useContext} from 'react';

import '../reset.css';
import styles from './UserInfo.module.css';
import TM from "./images/tm-logo.jpg";
import {Context} from "../../HOC/ContextProvider";

const UserInfo = () => {
    const {context} = useContext(Context);

    return (
        <div className={styles.userDetails}>
            <div>
                <img className={styles.photo} src={TM} alt="user`s photo"/>
            </div>
            <div className={`${styles.name} ${context === 'light' ? `${styles.night}` : `${styles.light}`}`}>
                Marichka Tanechnyk
            </div>
        </div>
    );
};

export default UserInfo;