import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { Grid } from '@mui/material';
import withRoot from '../withRoot';

function Projectform({children}) {
    console.log(children)
    var name = children.name;
    var description = children.description;
    var link = children.link;
    var language = children.language;

    return (
        <Card sx={{ minWidth: 275, minHeight: 275, borderRadius: 0, paddingBottom: 1, bgcolor:"#fff5f8" }}>
            <CardMedia
                component="img"
                height="120"
                width="80"
                image="https://miro.medium.com/max/1125/1*dDNpLKu_oTLzStsDTnkJ-g.png"
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>

                <Typography variant="body2">
                    {description}

                </Typography>
            </CardContent>
            <CardActions>
                <Button href={link} size="small">Github Link</Button>
            </CardActions>

            <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <Box
                                    sx={{
                                        mt: 1.5,
                                        p: 0.5,
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                        borderRadius: '5px',
                                        color: 'primary.main',
                                        fontWeight: 'medium',
                                        display: 'flex',
                                        fontSize: 15,
                                        alignItems: 'center',
                                        '& svg': {
                                            fontSize: 21,
                                            mr: 0.5,
                                        },
                                    }}
                                >
                                    {language}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </Card>
    )
}

export default withRoot(Projectform);