import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import MenuBar from './MenuBar';

import { useSelector, useDispatch } from "react-redux";
import { signOut } from '../../redux/dataActions'
import { Typography } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,

};
const leftLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
  variant: 'h6'
};



function AppAppBar() {

  const dispatch = useDispatch();
  const user = useSelector(state => state);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 0, display: 'flex', justifyContent: 'flex-start' }}>
            <MenuBar />
          </Box>
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Link
              style={{ textDecoration: 'none' }}
              to="/project"
            >
              <Typography
                variant='h6'
                sx={leftLink}>
                {'project'}
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/portfolio"
            >
              <Typography
                
                variant='h6'
                sx={leftLink}>
                {'portfolio'}
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/contact"
            >
              <Typography
                variant='h6'
                sx={leftLink}>
                {'contact'}
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/about"
            >
              <Typography
                variant='h6'
                sx={leftLink}>
                {'about'}
              </Typography>
            </Link>
          </Box>
          <Link
            style={{ textDecoration: 'none' }}
            to="/"
          >
            <Typography
              variant='h6'
              sx={{ fontSize: 24, paddingInline: 'inherit' }}>
              {'portfolio'}
            </Typography>
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>

            {user.authenticated ? (<CustomLink
              variant="h6"
              underline="none"
              onClick={() => { dispatch(signOut(user.user.token)) }}
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Out'}
            </CustomLink>) : (<CustomLink
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
            >
              {'Sign In'}
            </CustomLink>)}


          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div >
  );
}

export default AppAppBar;
