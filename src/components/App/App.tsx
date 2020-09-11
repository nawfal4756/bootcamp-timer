import React, { lazy, Suspense } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Header from '../Header/Header'
import { useStyles } from './App.styles'

const TimerBody = lazy(() => (import('../TimerBody/TimerBody')))

export default function App() {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <Suspense fallback={<Typography variant="h6" className={classes.text}>Data is loading... Please wait!</Typography>}>
                <Grid container>
                    <Grid item xs={12}>                    
                        <Header />                        
                    </Grid>
                    <Grid item xs={12}>
                        <TimerBody />
                    </Grid>
                </Grid>
            </Suspense>
        </div>
    )
}
