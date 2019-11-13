import React, { Component } from 'react';
import List from './components/List'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { MdSend } from "react-icons/md";
import uuid from "uuid";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: uuid,
            edit: false,
            charge: '',
            amount: 0
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            charges: this.state.charge,
            amounts: parseInt(this.state.amount)

        };
        console.log(newItem);
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            charge: "",
            amount: "",
            id: uuid(),
            edit: false
        });

    }
    clearList = () => {
        this.setState({
            items: []
        });
    };
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };
    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);

        console.log(selectedItem);

        this.setState({
            items: filteredItems,
            charge: selectedItem.charges,
            amount: selectedItem.amounts,
            edit: true,
            id: id
        });
    };
    render() {

        return (

            <> 
            <h1> budget calculator </h1> 
                
                <main className = "App" >
                
                <form onSubmit = { this.handleSubmit } >
                <div className = "form-center" >
                <div className = "form-group" >
                <label htmlFor = "expense" > charge </label> <
                input type = "text"
                className = "form-control"
                name = "charge"
                id = "charge"
                placeholder = "eg:rent"
                value = { this.state.charge }
                onChange = { e => this.setState({ charge: e.target.value }) }
                />
                 </div> 
                 <div className = "form-group" >
                <label htmlFor = "amount" > amount </label> 
                <input type = "text"
                className = "form-control"
                name = "amount"
                id = "amount"
                placeholder = "eg:amount"
                value = { this.state.amount }
                onChange = { e => this.setState({ amount: e.target.value }) }
                /> 
                </div> 
                </div> 
                <button type = "submit"
                className = "btn" > { this.state.edit ? "edit" : "submit" } { /* submit  */ } <
                MdSend className = "btn-icon" / >
                </button> 
                </form> 
                <List items = { this.state.items }
                clearList = { this.clearList }
                handleDelete = { this.handleDelete }
                handleEdit = { this.handleEdit }
                /> 
                </main> 
                <h1>
                total spending:
                    <span className = "total" >
                    $ {
                        this.state.items.reduce((acc, curr) => {
                            return (acc += curr.amounts);
                        }, 0)
                    }
                     </span> 
                     </h1> 
                     </>
            );
        }
    }

    export default App;