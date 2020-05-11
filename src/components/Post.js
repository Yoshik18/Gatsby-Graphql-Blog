import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
const Post = props => {
  return (
    <Link to={props.slug} className="no-decor">
      <Card className="mb-4 post-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text className="m-0 mb-1 text-muted">{props.date}</Card.Text>
          <Card.Title>
            <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
          </Card.Title>
          <Card.Text
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          ></Card.Text>
          <Card.Text
            className="text-muted category"
            dangerouslySetInnerHTML={{ __html: props.category }}
          ></Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Post
