import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react';
import RootStore from './models/store';

//debugging tools
import {onPatch} from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const store = RootStore.create({
    todos: {
        "1": {
            name: "Eat a cake",
        }
    }
});

onPatch(store, patch => {
    console.log(patch)
});

makeInspectable(store);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


