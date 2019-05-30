import React from "react";

const UserForm = (props) => {
    return(
    <form onSubmit={props.getUser}>
        <input type="text" name="username" className="inputStyles"/>
        <button>Submit</button>
    </form>
    );
}
  


export default UserForm;