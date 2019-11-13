import React, { Component } from 'react';
import { MdSend } from "react-icons/md";
class Form extends Component {
    render() {
        const { charge,amount, handleCharge,handleAmount, handleSubmit } = this.props;
        return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-center">
            <div className="form-group">
            <label htmlFor="expense">charge</label>
            <input type="text"
                    className="form-control"  placeholder="eg:rent" value={charge}
                    onChange={handleCharge} />
            </div>
           <div className="form-group">
             <label htmlFor="amount">amount</label>
             <input type="text" className="form-control" name="amount" id="amount"  placeholder="eg:amount" value={amount}
                    onChange={handleAmount}
             />
            </div>
              </div>
              <button type="submit" className="btn btn-info">submit <MdSend className="btn-icon" /></button>
                </form>
           </>     
        
        );
    }
}

export default Form;