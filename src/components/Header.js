import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import CustomLink from './CustomLink';
import { GAMES_PATH } from '../constants/urlApi';
const propTypes = {
  changeRoute: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.object
};

const defaultProps = {};

const Header = ({ changeRoute, logOut, currentUser }) => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <CustomLink path={'/'} changeRoute={changeRoute}>
          RAWG
        </CustomLink>
      </h1>
      <div className="search-bar">
        <button className="search-bar__button">
          <FaSearch className="search-bar__icon" />
        </button>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search for name"
        />
      </div>
      {!currentUser ? (
        <React.Fragment>
          <CustomLink
            path={'/login'}
            className="btn u-uppercase"
            style={{ marginRight: '1rem' }}
          >
            Login
          </CustomLink>
        </React.Fragment>
      ) : (
        <div>User đã đăng nhập</div>
      )}
    </header>
  );
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default React.memo(Header);
