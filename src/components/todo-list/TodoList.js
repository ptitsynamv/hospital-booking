import React from 'react';
import { observer } from 'mobx-react';

const TodoList = ({todo}) => {
    return(
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title">{todo.name}</h4>
                <div>
                    {todo.details}
                </div>
            </div>
            <div className="status" >
                {todo.status()}
            </div>
            {!todo.is_done &&
            <button
                className="btn btn-info mb-2"
                onClick={todo.markDone}
            >
                Done
            </button>}
        </div>
    )};

export default observer(TodoList);