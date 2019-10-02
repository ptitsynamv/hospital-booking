import React from 'react';

export default class Form extends React.Component  {
    render(){
        return(
            <form
                onSubmit={e =>{
                    e.preventDefault();
                    this.props.store.addTodo({
                        name: this.nameInput.value,
                        details: this.detailsInput.value,
                    });
                    e.target.reset();
                    this.nameInput.focus();
                }}>
                <label  htmlFor="name">
                    Name
                    <input
                        required
                        className="input"
                        type="text"
                        ref={input => (this.nameInput = input)}
                        id="name"
                    />
                </label>
                <label  htmlFor="details">
                    Details
                    <input
                        required
                        className="input"
                        type="text"
                        ref={input => (this.detailsInput = input)}
                        id="details"
                    />
                </label>
                <button
                    className="btn btn-info mb-2"
                    type="submit">
                    Add
                </button>
            </form>
        );
    }
}