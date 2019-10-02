import './App.scss';
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import TodoList from "../todo-list/TodoList";
import Form from "../form/Form";

class App extends Component {
    render() {
        const {store} = this.props;

        console.log('store', store.todoMap)

        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        header
                    </p>
                </header>
                <div>
                    <h3 className="subtitle">Make a new To do</h3>
                    <Form store={store}/>
                </div>
                <div className="card-container">
                    {store.values.map((todo, i) =>
                        <TodoList todo={todo} key={i}/>
                    )}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(App));


