import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './Header.styles'

export default function Header() {

    const classes = useStyles()

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" className={classes.text}>Timer App</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
