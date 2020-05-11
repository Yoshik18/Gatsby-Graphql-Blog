import React from "react"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayout"

const contact = () => (
  <PrimaryLayout>
    <div className="col-10">
      <h1>Contact</h1>
      <Form className="pt-5">
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject.." />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Message.." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </PrimaryLayout>
)

export default contact
