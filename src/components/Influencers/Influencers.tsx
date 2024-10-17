import './Influencers.scss';
import tiktok from '../../assets/icons/tiktok__icon.png';
import telegram from '../../assets/icons/telegram__icon.png';
import x from '../../assets/icons/x__icon.png';
import venomous from '../../assets/icons/venomous__icon.png';
import youtube from '../../assets/icons/youtube__icon.png';
import rightLeft from '../../assets/icons/righLeft__icon.png';
import discord from '../../assets/icons/discord__icon.png';
import instagram from '../../assets/icons/instagram__icon.png';
import setting from '../../assets/icons/setting__icon.png';
import search from '../../assets/icons/search__icon.png';

import usersIcon from '../../assets/icons/users__icon.png';
import { useState } from 'react';

export const Influencers = () => {
  const [icons] = useState([tiktok, telegram, x, venomous, youtube, rightLeft, discord, instagram]);
  return (
    <div className="influencers">
      <div className="influencers__wrapper container">
        <h2 className="influencers__header">Find Your Influencers</h2>
        <div className="influencers__itemsWrapper">
          <div className="influencers__inputSection">
            <img className="influencers__icon" src={usersIcon} />
            <input
              type="text"
              className="influencers__input"
              placeholder="Enter influencer's name here"
            />
          </div>

          <div className="influencers__iconsSection">
            {icons.map((el, i) => {
              return (
                <a href="javascript:void(0)">
                  <img
                    src={el}
                    key={`icon_${i}`}
                    className="influencers__icon"
                    alt={el.toString()}
                  />
                </a>
              );
            })}
          </div>
          <div className="influencers__buttonsSection">
            <img className="influencers__setting" src={setting} alt="setting" />
            <div className="influencers__button">
              <img src={search} alt="search" />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
      <span id="influencers"></span>
    </div>
  );
};
