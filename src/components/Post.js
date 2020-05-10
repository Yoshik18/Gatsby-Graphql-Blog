import React from "react"
import { Card, Button } from "react-bootstrap"
const Post = props => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
        </Card.Title>
        <Card.Text
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        ></Card.Text>
        <Card.Text
          className="text-muted"
          dangerouslySetInnerHTML={{ __html: props.category }}
        ></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Post
