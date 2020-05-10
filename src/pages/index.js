import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
import Post from "../components/Post"

const index = ({ data }) => {
  return (
    <PrimaryLayout>
      {data.allWordpressPost.nodes.map(node => (
        <div className="col-md-4">
          {node.categories.name}
          <Post
            title={node.title}
            excerpt={node.excerpt}
            image={
              node.featured_media.source_url == null
                ? ""
                : node.featured_media.source_url
            }
            category={node.categories[0].name}
          />
        </div>
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        date
        title
        excerpt
        featured_media {
          source_url
        }
        categories {
          name
        }
      }
    }
  }
`

export default index
