import React from "react";
import SearchBar from "../SearchBar";
import Button from "../Button";
import styles from './header.module.css';

const menuItems = ['Collections', 'Feature', 'FAQ'];

const Header = () => {
    return (
        <div className={`${styles.header} d-flex justify-space-between`}>
            <div className={`${styles.logoContainer} d-flex align-items-center`}>
                <p className={`${styles.logo} primary-text-color`}>Psycho<span className={`${styles.logoText}`}>Art</span></p>
                <SearchBar placeholder='Search items and collections' />
            </div>
            <div className={`${styles.menuContainer} d-flex align-items-center`}>
                <div className={`${styles.menu} d-flex`}>
                    {menuItems.map(menuItem => {
                        return <p className={`${styles.item} item primary-text-color`} key={menuItem}>{menuItem}</p>
                    })}
                </div>
                <Button text='Select Wallet' type='primary' onClick={() => {}}/>
            </div>
        </div>
    )
}

export default Header;
