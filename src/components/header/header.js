import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import history from "../../routes/history";
import "./theme.css";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();

    // Logout 
    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className="appBar">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Appiness
                    </Typography>
                        <div style={{ cursor: "pointer" }} onClick={handleLogout}>
                            Logout
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
