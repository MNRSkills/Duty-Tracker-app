import React from "react";

const Users = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={props.fullName.first_name}
        placeholder="Your fist name"
        onChange={props.handleChange}
        // onChange={(e) => {
        //   props.handleChange(e.target.value);
        // }}
      />
      <input
        type="text"
        name="last_name"
        value={props.fullName.last_name}
        placeholder="Your last name"
        onChange={props.handleChange}
        // onChange={(e) => {
        //   props.handleChange(e.target.value);
        // }}
      />
      <input
        type="text"
        name="email"
        // value={props.newUsers.Email}
        placeholder="Your email address"
        onChange={props.handleEmailChange}
        // onChange={(e) => {
        //   props.handleEmailChange(e.target.value);
        // }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Users;
