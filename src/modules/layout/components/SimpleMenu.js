import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu/Menu";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import TodoList from "../../todo/components/todo-list/TodoList";
import Booking from "../../booking/components/booking/Booking";
import SimpleMap from "../../booking/components/simple-map/SimpleMap";
import BookingService from "../../booking/services/BookingService";


class SimpleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            bookingService: new BookingService(),
        }
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    useStyles = () => makeStyles(theme => ({
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

    render() {
        const classes = this.useStyles();
        const {anchorEl, bookingService} = this.state;
        const {store} = this.props;
        return (
            <div>
                <Router>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton onClick={this.handleClick} edge="start" className={classes.menuButton}
                                        color="inherit"
                                        aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Mobx
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem component={Link} to="/" onClick={this.handleClose}>Home</MenuItem>
                        <MenuItem component={Link} to="todo" onClick={this.handleClose}>TodoList</MenuItem>
                        <MenuItem component={Link} to="booking" onClick={this.handleClose}>Booking</MenuItem>
                        <MenuItem component={Link} to="map" onClick={this.handleClose}>Map</MenuItem>
                    </Menu>

                    <Route exact path="/" component={Home}/>
                    <Route path="/todo" component={() => <TodoList store={store}/>}/>
                    <Route path="/booking" component={() => <Booking bookingService={bookingService}/>}/>
                    <Route path="/map" component={() => <SimpleMap bookingService={bookingService}/>}/>
                </Router>
            </div>
        )
    }
}

export default SimpleMenu;