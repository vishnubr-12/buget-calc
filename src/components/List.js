import React, { Component } from 'react';
import Item from './Item'
import { MdDelete } from "react-icons/md";
class List extends Component {

    render() {
        const{items,handleDelete, handleEdit,clearList }=this.props;
        return (
            <>
            <ul className="list">
            {items.map(item => {
          return (
            <Item
              key={item.id}
              charges={item.charges}
              amounts={item.amounts}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
             </ul>
             {items.length > 0 && (
    <button className="btn" onClick={clearList}>
      clear expenses
      <MdDelete className="btn-icon" />
     </button>
 )}
            </>
        );
    }
}

export default List;