import React, { useState, useEffect } from "react";

const Form = ({ fields, onSubmit, onChange, formData }) => {
  // console.log(fullName)
  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor="">{`${field.label}`}</label>
            {field.type == "textarea" ? (
              <textarea
                type={field.type}
                name={`${field.name}`}
                onChange={onChange}
                value={formData.name}
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={`${field.name}`}
                onChange={onChange}
                value={formData.name}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
