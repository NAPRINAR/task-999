import searchIcon from '../../assets/icons/search__icon.png';
import userIcon from '../../assets/icons/user__icon.png';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__first container">
        <div className="navbar__firstIconSection">
          <div className="navbar__firstIconSearch">
            <img src={searchIcon} className="navbar__firstIcon" />
            <p className="navbar__searchDesc">search here!</p>
          </div>
          <div className="navbar__firstIconLogin">
            <img src={userIcon} alt="user" className="navbar__userIcon" />
            <p className="navbar__loginDesc">Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
