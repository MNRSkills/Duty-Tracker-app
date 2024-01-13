import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormComp = ({ fields, onSubmit, onChange, formData }) => {
  // console.log(fullName)
  return (
    <div>
      <Form action="submit" onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <Form.Group key={index}>
            <Form.Label htmlFor="">{`${field.label}`}</Form.Label>
            {field.type == "textarea" ? (
              <Form.Control
                as="textarea"
                type={field.type}
                name={`${field.name}`}
                onChange={onChange}
                value={formData.name}
              />
            ) : (
              <Row>
                <Col>
                  <Form.Control
                    type={field.type}
                    name={`${field.name}`}
                    onChange={onChange}
                    value={formData.name}
                  />
                </Col>
              </Row>
            )}
          </Form.Group>
        ))}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FormComp;
