
import React, { useContext, useEffect, useState } from "react";
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

import { Container, Grid, Typography, Input, Card, Button, CardMedia, CardContent, CardActions, Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { getProfile, editProfile } from '../redux/dataActions'

function About() {
    const dispatch = useDispatch();
    const user = useSelector(state => state)
    const [name, setName] = useState();
    const [major, setMajor] = useState();
    const [description, setDescription] = useState();
    const [edit, setEdit] = useState(false);
    const [isLoading, setLoading] = useState(true);




    useEffect(() => {
        dispatch(getProfile())
    }, [])

    if (isLoading) {
        if (user.userinfo !== null) {
            console.log(user.userinfo);
            console.log(121)
            setName(user.userinfo.name);
            setMajor(user.userinfo.major);
            setDescription(user.userinfo.profile);
            setLoading(false);
        }

    }

    console.log(user.userinfo)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            'name': name,
            'major': major,
            'profile': description
        }
        dispatch(editProfile(user.token, data));
        setEdit(!edit);
    };

    const setShowEdit = () => {
        setEdit(!edit);
    }




    const profile =
        <Card elevation={1} sx={{ width: 650, height: 650, borderRadius: 0, paddingBottom: 1, bgcolor: '#fff5f8' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {major}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => { setShowEdit() }}>Edit</Button>
            </CardActions>

        </Card>

    const edit_Profile =

        <form onSubmit={handleSubmit} noValidate autoComplete="off" align="center">
            <Card elevation={1} sx={{ width: 650, height: 650, borderRadius: 0, paddingBottom: 1, bgcolor: '#fff5f8' }}>
                <Typography align="center" variant="overline" sx={{ fontSize: 30 }}>Edit about</Typography>

                <CardContent>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Input disableUnderline={true}
                                sx={{
                                    minWidth: 400,
                                    padding: 2,
                                    fontSize: 18,
                                    border: "1px solid",
                                    bgcolor: "#fff",
                                    borderColor: "#ff3366",

                                }}
                                id="outlined"
                                label="Name"
                                maxRows={4}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input disableUnderline={true}
                                sx={{
                                    minWidth: 400,
                                    padding: 2,
                                    fontSize: 18,
                                    border: "1px solid",
                                    bgcolor: "#fff",
                                    borderColor: "#ff3366",

                                }}
                                id="outlined"
                                label="Major"
                                maxRows={4}
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input disableUnderline={true}
                                sx={{
                                    minWidth: 400,
                                    padding: 2,
                                    fontSize: 18,
                                    border: "1px solid",
                                    bgcolor: "#fff",
                                    borderColor: "#ff3366",

                                }}
                                id="outlined"
                                label="Description"
                                multiline
                                maxRows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <Grid item >
                    <Button
                        color="secondary"
                        type="submit"
                        size="large"
                        variant="contained"

                        sx={{
                            minWidth: 400,
                            border: "1px solid",
                            bgcolor: "#ff3366",
                            borderColor: "#ff3366",
                        }}>Submit</Button>
                </Grid>

            </Card>
        </form>


    return (

        <React.Fragment>
            <AppAppBar />

            <Grid container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center">
                {/* {edit ? edit_Profile : profile} */}
                <Grid item xs={12}>
                    <Box sx={{
                        width: 960,
                        height: 350,
                        backgroundColor: 'secondary.light',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                            opacity: [0.9, 0.8, 0.7],
                          },
                        elevation: 4
                    }}>
                        <Typography variant="h1">wonyus</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        width: 960,
                        height: 350,
                        backgroundColor: 'secondary.light',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                            opacity: [0.9, 0.8, 0.7],
                          },
                    }}>
                        <Typography variant="h1">wonyus</Typography>
                    </Box>
                </Grid>

            </Grid>

        </React.Fragment >

    )
}

export default withRoot(About);