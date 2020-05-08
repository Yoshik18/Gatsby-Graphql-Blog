import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
import Post from "../components/Post"

const index = ({ data }) => {
  return (
    <PrimaryLayout>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`

export default index
