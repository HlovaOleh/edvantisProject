import React from "react";
import Button from "../Button";
import styles from "./mainInfoContainer.module.css";
import nftImageList from "./../../assets/nft-image-list.png"

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
                <h1 className={`${styles.heading} primary-text-color`}>Create, Sell &<br />
                  Collect Your Own<br />
                  Creative NFT</h1>
                <p className="secondary-text-color">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc vulputate libero et velit.</p>
                <div className={`${styles.buttons} d-flex align-items-center`}>
                  <Button text='Explore Now' type='primary' onClick={() => {}} />
                  <Button text='Sell NFT' type='secondary' onClick={() => {}} width="117px" height="50px" />
                </div>
              </div>
              <div>
                <div className={`${styles.list} d-flex align-items-center`}>
                  {marketplaceInfo.map(info => {
                    return (
                      <div className="d-flex flex-direction-column align-items-center" key={info.name}>
                        <span className={`${styles.listQuantity} primary-text-color`}>{info.quantity}</span>
                        <span className={`${styles.listName} secondary-text-color`}>{info.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <img src={nftImageList} className={styles.mainImage} alt="Nft"></img>
        </div>
    )
}

export default MainInfoContainer;
