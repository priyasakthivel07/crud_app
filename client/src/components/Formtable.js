import React from "react";
import "../App.css"
import {MdClose} from "react-icons/md"

const Formtable = ({handleSubmit,handleOnchange,handleclose,rest}) =>{
    return (
        <div className='addContainer'>
          <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={handleclose}><MdClose/></div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" onChange={handleOnchange} value={rest.name}></input>

          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" onChange={handleOnchange} value={rest.email}></input>

          <label htmlFor="mobile">Mobile : </label>
          <input type="number" id="mobile" name="mobile" onChange={handleOnchange} value={rest.mobile}></input>

          <button className="btn">Submit</button>
        </form>
      </div>
    )

}
export default Formtable