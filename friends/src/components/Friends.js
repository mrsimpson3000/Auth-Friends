import React, { useState, useEffect } from "react";
import { Row, Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

import FriendCard from "../components/FriendCard";

import { axiosWithAuth } from "../utils/axiosAuth";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        console.log(response);
        setFriends(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Row>
        {/* {console.log(friends)} */}
        {friends.map((friend, index) => {
          return <FriendCard friend={friend} key={index} />;
        })}
      </Row>
      <Row className='pt-5 pb-5'>
        <Col sm={12} md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit} className='bg-primary p-4'>
            <FormGroup>
              <Label for='name'>New Friend Name</Label>
              <Input
                onChange={handleChange}
                type='text'
                name='name'
                id='name'
                value={formValues.name}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='age'>New Friend Age (number only please)</Label>
              <Input
                onChange={handleChange}
                type='text'
                name='age'
                id='age'
                value={formValues.age}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for='email'>New Friend Email</Label>
              <Input
                onChange={handleChange}
                type='email'
                name='email'
                id='email'
                value={formValues.email}
                required
              />
            </FormGroup>
            <Button color='secondary'>Add New Friend</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
