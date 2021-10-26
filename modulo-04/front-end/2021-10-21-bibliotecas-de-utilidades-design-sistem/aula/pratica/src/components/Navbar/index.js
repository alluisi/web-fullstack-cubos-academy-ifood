import React from 'react';
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Pokedex
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;