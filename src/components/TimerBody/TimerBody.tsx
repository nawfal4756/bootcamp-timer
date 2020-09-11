import React, { useState } from 'react'
import { useStyles } from './TimerBody.styles'
import { Grid, Card, CardContent, Typography, CardActions, ButtonGroup, Button } from '@material-ui/core'

export default function TimerBody() {
    const classes = useStyles()

    const [timerOn, setTimerOn] = useState(false)
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify='center' alignContent='center'>

                <Grid item xs={12} sm={12} md={3}>
                    <Card raised>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography variant="h4" className={classes.text}>Hours</Typography>
                                    <Typography variant='h1' className={classes.text}>{hours < 10 ? `0${hours}` : {hours}}</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <ButtonGroup>
                                        <Button>+</Button>
                                        <Button>-</Button>
                                    </ButtonGroup>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <Card raised>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography variant="h4" className={classes.text}>Minutes</Typography>
                                    <Typography variant='h1' className={classes.text}>{min < 10 ? `0${min}` : {min}}</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <ButtonGroup>
                                        <Button>+</Button>
                                        <Button>-</Button>
                                    </ButtonGroup>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <Card raised>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography variant="h4" className={classes.text}>Seconds</Typography>
                                    <Typography variant='h1' className={classes.text}>{sec < 10 ? `0${sec}` : {sec}}</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <ButtonGroup>
                                        <Button>+</Button>
                                        <Button>-</Button>
                                    </ButtonGroup>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2} justify='center' alignContent='center'>
                        <Grid item xs={2} className={classes.btncontrol}>
                            <Button fullWidth className={classes.btn}>Start</Button>
                        </Grid>

                        <Grid item xs={2} className={classes.btncontrol}>
                            <Button fullWidth>Stop</Button>
                        </Grid>

                        <Grid item xs={2} className={classes.btncontrol}>
                            <Button fullWidth>Reset</Button>
                        </Grid>

                        <Grid item xs={2} className={classes.btncontrol}>
                            <Button fullWidth>Restart</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}
