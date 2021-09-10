import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {
  const { currentPath, updatePath } = props;
  const { path } = currentPath;

  let backArrow = (
    <NavLink
      className={styles.backArrow}
      to="/"
      onClick={() => {
        updatePath({
          ...currentPath,
          path: '/',
        });
      }}
    >
      &#60;
    </NavLink>
  );

  let navigationPath = (
    <p className={`${styles.navigationPath}`}>
      gni per capita per country
    </p>
  );

  if (path === '/') {
    backArrow = (
      <div className="d-none" />
    );
    navigationPath = (
      <p className={`${styles.homePath}`}>gni per capita in the world</p>
    );
  }

  return (
    <header className={`d-flex ${styles.header}`}>
      {backArrow}
      {navigationPath}
    </header>
  );
};

Header.propTypes = {
  currentPath: PropTypes.shape({
    path: PropTypes.string.isRequired,
    groupId: PropTypes.string.isRequired,
    currentCategory: PropTypes.shape({
      current: PropTypes.string.isRequired,
      other: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updatePath: PropTypes.func.isRequired,
};

export default Header;
