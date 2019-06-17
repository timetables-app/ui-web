import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import LogInLink from './LogInLink';
import RegisterLink from './RegisterLink';

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);

  const handleMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={LogInLink}>
          Zaloguj
        </MenuItem>
        <MenuItem onClick={handleClose} component={RegisterLink}>
          Zarejestruj
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountDropdown;
