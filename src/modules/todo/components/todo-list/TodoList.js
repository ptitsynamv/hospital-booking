import React from 'react';
import {observer} from 'mobx-react';
import Form from "../form/Form";

const TodoList = ({store}) => {
    return (
        <div className="card">
            <div>
                <h3 className="subtitle">Make a new To do</h3>
                <Form store={store}/>
            </div>
            <div className="card-container">
                {store.todoMap.map((todo, i) =>
                    <div key={i}>
                        <div className="card-body">
                            <h4 className="card-title">{todo.name}</h4>
                            <div>
                                {todo.details}
                            </div>
                        </div>
                        <div className="status">
                            {todo.status}
                        </div>
                        {!todo.isDone &&
                        <button
                            className="btn btn-info mb-2"
                            onClick={e => todo.toggle()}
                        >
                            Done
                        </button>}
                    </div>
                )}
            </div>
        </div>
    )
};

export default observer(TodoList);


