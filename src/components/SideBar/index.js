import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import ROUTES from '../../routes';
import { removeToken } from '../../redux/slices';
import './styles.scss';

const getClass = (defaultClass, currentPath) => testPath => (currentPath === testPath
  ? `${defaultClass} active` : defaultClass);

const SideBar = ({ dispatch, token }) => {
  const defaultLinkClass = 'p-3 font-bold pl-6 hover:bg-green-500';
  const { pathname } = useLocation();

  const isActive = getClass(defaultLinkClass, pathname);

  return (
    <div className="sidebar bg-gray-100 flex flex-col justify-between shadow-2xl">
      <div className="brand flex-none p-10">
        <img
          alt="brand"
          className="ml-auto mr-auto"
          src="https://img.icons8.com/ios-filled/100/000000/person-calendar.png"
        />
      </div>
      <div className="nav flex-1">
        <ul className="ml-8 uppercase">
          <li className={isActive(ROUTES.HOME)}>
            <Link to={ROUTES.HOME}>About</Link>
          </li>
          {!token && (
            <>
              <li className={isActive(ROUTES.SIGN_IN)}>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
              </li>
              <li className={isActive(ROUTES.SIGN_UP)}>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
              </li>
            </>
          )}
          {token && (
            <>
              <li className={isActive(ROUTES.APPOINTMENTS)}>
                <Link to={ROUTES.APPOINTMENTS}>Appointments</Link>
              </li>
              <li className={isActive(ROUTES.SIGN_OUT)}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={() => { dispatch(removeToken()); }} role="button">Sign Out</a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-none social-icons">
        <ul className="flex justify-center my-3">
          <li><i className="fa fa-twitter px-2" /></li>
          <li><i className="fa fa-facebook-f px-2" /></li>
          <li><i className="fa fa-google-plus px-2" /></li>
          <li><i className="fa fa-vimeo px-2" /></li>
          <li><i className="fa fa-pinterest-p px-2" /></li>
        </ul>
        <p className="mb-3 font-semibold text-center text-xs">
          &copy;
          <span className="mx-1">{new Date().getFullYear()}</span>
          <span className="mx-1">-</span>
          Edward Iga Kigongo
        </p>
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  token: null,
};

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => {
  const { token } = state;
  return {
    token,
  };
};

export default connect(mapStateToProps)(SideBar);
