import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu/Menu";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import TodoList from "../../todo/components/todo-list/TodoList";
import Booking from "../../booking/components/Booking";
import SimpleMap from "../../booking/components/simple-map/SimpleMap";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function SimpleMenu({store}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit"
                                    aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Mobx
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                    <MenuItem component={Link} to="todo" onClick={handleClose}>TodoList</MenuItem>
                    <MenuItem component={Link} to="booking" onClick={handleClose}>Booking</MenuItem>
                    <MenuItem component={Link} to="map" onClick={handleClose}>Map</MenuItem>
                </Menu>


                <Route exact path="/" component={Home}/>
                <Route path="/todo" component={() => <TodoList store={store} />}/>
                <Route path="/booking" component={() => <Booking store={store} />}/>
                <Route path="/map" component={() => <SimpleMap store={store} />}/>
            </Router>

        </div>
    );
}
