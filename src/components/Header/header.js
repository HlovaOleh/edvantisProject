import React from "react";
import SearchBar from "../SearchBar";
import Button from "../Button";
import './header.css';

const menuItems = ['Collections', 'Feature', 'FAQ'];

const Header = () => {
    return (
        <div className="header d-flex justify-space-between">
            <div className="d-flex align-items-center header__logo-container">
                <p className="header__logo primary-text-color">Psycho<span className="header__logo-text">Art</span></p>
                <SearchBar placeholder='Search items and collections' />
            </div>
            <div className="d-flex align-items-center header__menu-container">
                <div className="d-flex header__menu">
                    {menuItems.map(menuItem => {
                        return <p className="header__menu-item primary-text-color" key={menuItem}>{menuItem}</p>
                    })}
                </div>
                <Button text='Select Wallet' type='primary' onClick={() => {}}/>
            </div>
        </div>
    )
}

export default Header;
