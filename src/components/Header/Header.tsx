import './Header.scss';
import menuIcon from '../../assets/icons/menu__icon.png';
import closeIcon from '../../assets/icons/close__icon.png';
import finfluIcon from '../../assets/icons/finflu__icon.png';
import arrowDown from '../../assets/icons/arrowDown__icon.png';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [menuList] = useState([
    'Influencers',
    'dashboard',
    'community',
    'analytics and reports',
    'education and resoruces',
    'subscription and pricing',
    'contact and support',
  ]);
  const [handleMenu, setHandleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:844px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e?.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  console.log(isMobile);

  return (
    <div className="header ">
      <div className="header__wrapper container ">
        <div className="header__infoSection ">
          <div className="header__infoTitle">
            <h1>
              Profit from Accurate <br /> Stock
              <br /> Predictions
              <br /> with <br />
              Influencer
              <br /> Insights
            </h1>
          </div>
          <div className="header__infoButton">
            <button>Start Now {`->`}</button>
            <p>
              Limited
              <br /> Spots Available
            </p>
          </div>
        </div>
        {/* <div className="header__imgSection"><img src={headerBg} alt="" /></div> */}
      </div>
      <div className="header__menu">
        <div className="header__menuWrapper">
          <div className="header__menuBurgerSection">
            <div className="header__menuLogo" onClick={() => setHandleMenu(true)}>
              <img src={menuIcon} alt="menu" />
              <p>MENU</p>
            </div>
          </div>
          <div className="header__menuIcon">
            <img src={finfluIcon} alt="finflu" />
          </div>
          {!isMobile && (
            <div className="header__menuNav">
              <ul className="header__menuNavList">
                <li>
                  <a href="#influencers">{menuList[0]}</a>
                </li>
                <li>
                  <a href="#dashboard">{menuList[1]}</a>
                </li>
                <li>
                  <a href="#subscription">{menuList[5].replace(' and pricing', '')}</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {handleMenu && (
        <div className="header__menuOpen">
          <div onClick={() => setHandleMenu(false)} className="header__menuClose">
            <img src={closeIcon} alt="close" /> <p>Close</p>
          </div>
          <div className="header__menuDesc">
            <ul className="header__menuList">
              {menuList &&
                menuList.map((el, i) => {
                  return (
                    <a href={`#${el}`}>
                      <li key={`item_${el}_${i}`}>{el}</li>
                    </a>
                  );
                })}
            </ul>
            <div className="header__menuButtonsSection">
              <h3>MENU</h3>
              <div className="header__menuButtons">
                <button>Join Now {'->'}</button>
                <button>Create Account </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="header__joinUsSection">
          <div className="header__think">
            <p>
              Join 10,000+
              <br /> users boosting
              <br /> earnings
              <br /> with proven <br /> forecasts
            </p>
          </div>
          <img className="header__arrowDown" src={arrowDown} />
        </div>
      )}
    </div>
  );
};
