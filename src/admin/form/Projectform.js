import * as React from 'react';
import { Grid, Paper, Button, Typography, Container } from '@mui/material';
import TextField from '../../modules/components/TextField';

import { useSelector, useDispatch } from "react-redux";
import { addProject, setBackdrop } from '../../redux/dataActions'




function Projectform() {
    const dispatch = useDispatch();
    const user = useSelector(state => state)


    function handleSubmit(event) {
        event.preventDefault();
        const { name, description, link, language } = event.target.elements;
        const content = { name: name.value, description: description.value, link: link.value, language: language.value }
        dispatch(addProject(user.user.token, content))
        dispatch(setBackdrop())
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} lg={12} md={12}>
                    <Paper
                        onSubmit={(val) => {
                            handleSubmit(val)
                        }}
                        component="form"
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'auto',
                            width: 450,
                            margin: 'auto'
                        }}
                    >
                        <Typography>NEW PROJECT</Typography>
                        <TextField
                            type='text'
                            sx={{ marginTop: 1 }}
                            name="name"
                            label="Project Name"
                            variant="standard"
                        />
                        <TextField
                            type='text'
                            sx={{ marginTop: 1 }}
                            name="description"
                            label="Description"
                            variant="standard"
                        />
                        <TextField
                            type='text'
                            sx={{ marginTop: 1 }}
                            name="link"
                            label="Link"
                            variant="standard"
                        />
                        <TextField
                            type='text'
                            sx={{ marginTop: 1 }}
                            name="language"
                            label="Language"
                            variant="standard"
                        />

                        <Grid container textAlign='center' spacing={5}>
                            <Grid item xs={6}>
                                <Button
                                    size="small"
                                    target="_blank"
                                    type='submit'
                                    sx={{ marginTop: 3 }}
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    size="small"
                                    target="_blank"
                                    onClick={() => { dispatch(setBackdrop()) }}
                                    sx={{ marginTop: 3 }}
                                >
                                    cancel
                                </Button>
                            </Grid>
                        </Grid>


                    </Paper>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

export default Projectform;