import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "./TimerBody.styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  ButtonGroup,
  Button,
} from "@material-ui/core";

export default function TimerBody() {
  const classes = useStyles();

  let h = 0;
  let m = 0;
  let s = 0;

  const [timerOn, setTimerOn] = useState(false);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const startTimer = () => {
    h = hours;
    m = min;
    s = sec;
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {};

  const restartTimer = () => {};

  useEffect(() => {
    if (timerOn) {
      
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center" alignContent="center">
        <Grid item xs={12} sm={12} md={3}>
          <Card raised>
            <Grid container>
              <Grid item xs={12}>
                <CardContent>
                  <Typography
                    variant="h4"
                    className={classes.text}
                    id="heading"
                  >
                    Hours
                  </Typography>
                  <Typography variant="h1" className={classes.text} id="hours">
                    {hours < 10 ? `0${hours}` : hours}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12}>
                <CardActions>
                  <ButtonGroup>
                    <Button
                      id="plusHours"
                      onClick={() => {
                        setHours(hours + 1);
                      }}
                    >
                      +
                    </Button>
                    <Button
                      id="minusHours"
                      onClick={() => {
                        setHours(hours - 1);
                      }}
                      disabled={hours === 0}
                    >
                      -
                    </Button>
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
                  <Typography
                    variant="h4"
                    className={classes.text}
                    id="heading"
                  >
                    Minutes
                  </Typography>
                  <Typography
                    variant="h1"
                    className={classes.text}
                    id="minutes"
                  >
                    {min < 10 ? `0${min}` : min}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12}>
                <CardActions>
                  <ButtonGroup>
                    <Button
                      id="plusMinutes"
                      onClick={() => {
                        setMin(min + 1);
                      }}
                      disabled={min === 59}
                    >
                      +
                    </Button>
                    <Button
                      id="minusMinutes"
                      onClick={() => {
                        setMin(min - 1);
                      }}
                      disabled={min === 0}
                    >
                      -
                    </Button>
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
                  <Typography
                    variant="h4"
                    className={classes.text}
                    id="heading"
                  >
                    Seconds
                  </Typography>
                  <Typography
                    variant="h1"
                    className={classes.text}
                    id="seconds"
                  >
                    {sec < 10 ? `0${sec}` : sec}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12}>
                <CardActions>
                  <ButtonGroup>
                    <Button
                      id="plusSeconds"
                      onClick={() => {
                        setSec(sec + 1);
                      }}
                      disabled={sec === 59}
                    >
                      +
                    </Button>
                    <Button
                      id="minusSeconds"
                      onClick={() => {
                        setSec(sec - 1);
                      }}
                      disabled={sec === 0}
                    >
                      -
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} justify="center" alignContent="center">
            <Grid item xs={2} className={classes.btncontrol}>
              <Button
                fullWidth
                className={classes.btn}
                id="startBtn"
                onClick={startTimer}
              >
                Start
              </Button>
            </Grid>

            <Grid item xs={2} className={classes.btncontrol}>
              <Button fullWidth className={classes.btn} onClick={stopTimer}>
                Stop
              </Button>
            </Grid>

            <Grid item xs={2} className={classes.btncontrol}>
              <Button fullWidth className={classes.btn} onClick={resetTimer}>
                Reset
              </Button>
            </Grid>

            <Grid item xs={2} className={classes.btncontrol}>
              <Button fullWidth className={classes.btn} onClick={restartTimer}>
                Restart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
