import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Projectform from '../modules/components/Projectform';
import { Container, Toolbar } from '@mui/material';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

import { useSelector, useDispatch } from "react-redux";
import { getProjects } from '../redux/dataActions'


function Projects() {
    const user = useSelector(state => state)

    const projects = user.projects;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <React.Fragment>
            <AppAppBar />
            <Toolbar/>
            <Container>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>

                    <Grid container justifyContent="center" spacing={2}>
                        {projects && projects.map((value) => (
                            <Grid key={value.id} item xs>
                                <Projectform >{value}</Projectform>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Container>

        </React.Fragment>
    )
}
export default withRoot(Projects);
