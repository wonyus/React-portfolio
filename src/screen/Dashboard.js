import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link  } from 'react-router-dom';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


function Dashboard() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                
            </Container>

        </React.Fragment>

    );
}

export default withRoot(Dashboard);