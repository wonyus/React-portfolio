import * as React from 'react';
import { Grid, Paper, Button, Typography } from '@mui/material';
import TextField from '../../modules/components/TextField';

import { useSelector, useDispatch } from "react-redux";
import { deleteProject, editProject } from '../../redux/dataActions'
import AdminDashboard from './AdminDashboard';


function ProjectContent() {
    const dispatch = useDispatch();
    const user = useSelector(state => state)

    const projects = user.projects;


    function handleSubmit(event) {
        event.preventDefault();
        const { name, description, link, language } = event.target.elements;
        const id = event.id;
        const content = { name: name.value, description: description.value, link: link.value, language: language.value }
        dispatch(editProject(user.user.token, content, id))
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {projects && projects.map((data) => (

                    <Grid item xs={12} md={4}>
                        <Paper
                            onSubmit={(val) => {
                                val.id = data.id
                                handleSubmit(val)
                            }}
                            component="form"
                            key={data.id}
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                        >
                            <TextField
                                type='text'
                                sx={{ marginTop: 1 }}
                                defaultValue={data.name}
                                name="name"
                                label="Project Name"
                                variant="standard"
                            />
                            <TextField
                                type='text'
                                sx={{ marginTop: 1 }}
                                defaultValue={data.description}
                                name="description"
                                label="Description"
                                variant="standard"
                            />
                            <TextField
                                type='text'
                                sx={{ marginTop: 1 }}
                                defaultValue={data.link}
                                name="link"
                                label="Link"
                                variant="standard"
                            />
                            <TextField
                                type='text'
                                sx={{ marginTop: 1 }}
                                defaultValue={data.language}
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
                                        onClick={() => { dispatch(deleteProject(user.user.token, data.id)) }}
                                        sx={{ marginTop: 3 }}
                                    >
                                        DELETE
                                    </Button>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}


function AdminProjects() {

    return (
        <AdminDashboard props={<ProjectContent />} />
    );
}

export default AdminProjects;