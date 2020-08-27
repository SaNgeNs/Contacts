import React, { memo, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink } from 'react-router-dom';
import getMyCards from 'Actions/getMyCards';
import { useDispatch } from 'react-redux';

import styles from './styles';

const activeStyle = {
  backgroundColor: '#33ccff',
  fontWeight: 'bold',
};

export const Header = ({
  classes,  
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCards());
  }, []);

  return (
    <header className={classes.wrap}>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={classes.link}
            exact
            to="/"
            activeStyle={activeStyle}
          >
            Main
          </NavLink>
        </li>

        <li>
          <NavLink
            className={classes.link}
            exact
            to="/favourite"
            activeStyle={activeStyle}
          >
            Favourite
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default memo(withStyles(styles)(Header));
