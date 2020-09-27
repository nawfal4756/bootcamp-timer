import React, { useEffect, useState } from "react";
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

  const [timerOn, setTimerOn] = useState(false);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setHours(0);
    setMin(0);
    setSec(0);
  };

  useEffect(() => {
    if (timerOn) {
      var timerInterval = setInterval(() => {
        setSec(sec - 1);

        if (sec === 0 && min > 0) {
          setMin(min - 1);
          setSec(59);
        }

        if (min === 0 && sec === 0 && hours >= 0) {
          setHours(hours - 1);
          setMin(59);
          setSec(59);
        }

        if (hours === 0 && min === 0 && sec === 0) {
          setTimerOn(false);
        }
      }, 1000);
      return function cleanup() {
        clearInterval(timerInterval);
      };
    }
  });

  if (hours === -1 && min === 59 && sec === 59 && !timerOn) {
    resetTimer();
  }

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
                      disabled={timerOn}
                    >
                      +
                    </Button>
                    <Button
                      id="minusHours"
                      onClick={() => {
                        setHours(hours - 1);
                      }}
                      disabled={hours === 0 || timerOn}
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
                      disabled={min === 59 || timerOn}
                    >
                      +
                    </Button>
                    <Button
                      id="minusMinutes"
                      onClick={() => {
                        setMin(min - 1);
                      }}
                      disabled={min === 0 || timerOn}
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
                      disabled={sec === 59 || timerOn}
                    >
                      +
                    </Button>
                    <Button
                      id="minusSeconds"
                      onClick={() => {
                        setSec(sec - 1);
                      }}
                      disabled={sec === 0 || timerOn}
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
              <Button
                fullWidth
                className={classes.btn}
                onClick={stopTimer}
                id="stopBtn"
              >
                Stop
              </Button>
            </Grid>

            <Grid item xs={2} className={classes.btncontrol}>
              <Button
                fullWidth
                className={classes.btn}
                onClick={resetTimer}
                id="resetBtn"
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
