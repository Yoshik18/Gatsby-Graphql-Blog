import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
const Post = props => {
  return (
    <Link as={Link} to={props.slug}>
      <Card className="mb-4 post-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
          </Card.Title>
          <Card.Text
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
