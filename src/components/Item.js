import React, { Component } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
class Item extends Component {
    render() {
        const {charges,amounts,handleDelete, handleEdit}=this.props;
        return (
        
               <li className="item">
      <div className="info">
        <span className="expense"> {charges}</span>
        <span className="amount" >${amounts}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={handleEdit}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
      </div>
    </li>
           
        );
    }
}

export default Item;