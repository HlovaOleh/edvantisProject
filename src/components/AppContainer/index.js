import React from "react";
import PropTypes from 'prop-types';
import styles from "./appContainer.module.css";

const AppContainer = ({children}) => {
    return <div className={styles.container}>{children}</div>
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContainer;
