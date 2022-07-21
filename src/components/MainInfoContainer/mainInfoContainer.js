import React from "react";
import Button from "../Button";
import "./mainInfoContainer.css";

const marketplaceInfo = [
  {
    'quantity': '37k+',
    'name': 'Artworks',
  },
  {
    'quantity': '20k+',
    'name': 'Artists',
  },
  {
    'quantity': '99k+',
    'name': 'Aucations',
  },
];

const MainInfoContainer = () => {
    return (
        <div className="d-flex justify-space-between">
            <div>
              <div>
                <h1 className="main-info__heading primary-text-color">Create, Sell &<br />
                  Collect Your Own<br />
                  Creative NFT</h1>
                <p className="secondary-text-color">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc vulputate libero et velit.</p>
                <div className="main-info__buttons d-flex align-items-center">
                  <Button text='Explore Now' type='primary' onClick={() => {}} />
                  <Button text='Sell NFT' type='secondary' onClick={() => {}} width="117px" height="50px" />
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center main-info__list">
                  {marketplaceInfo.map(info => {
                    return (
                      <div className="d-flex flex-direction-column align-items-center" key={info.name}>
                        <span className="main-info__list-quantity primary-text-color">{info.quantity}</span>
                        <span className="main-info__list-name secondary-text-color">{info.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="main-info__image"></div>
        </div>
    )
}

export default MainInfoContainer;
