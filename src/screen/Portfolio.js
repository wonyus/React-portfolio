import * as React from 'react';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

import { Container } from '@mui/material';

function Portfolio() {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>

            </Container>
        </React.Fragment>
    )
}
export default withRoot(Portfolio);