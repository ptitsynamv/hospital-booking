import './App.scss';
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Container from '@material-ui/core/Container';
import SimpleMenu from "../SimpleMenu";

class App extends Component {
    render() {
        const {store} = this.props;
        return (
            <Container fixed>
                <SimpleMenu store={store}/>
            </Container>
        );
    }
}

export default inject('store')(observer(App));


