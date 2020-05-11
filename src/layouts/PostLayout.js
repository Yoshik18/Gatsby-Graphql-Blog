import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogPost = ({ data }) => {
  console.log(data)
  const post = data.wordpressPost

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-12">
            <h1
              className="text-center p-2 font-weight-bold"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></h1>
            <p className="text-center">
              {post.date}, by {post.author.name}
            </p>
            <div className="text-center">
              <img
                className="text-center"
                src={post.featured_media.source_url}
                alt="Main"
              />
            </div>
            <div className="col-8 d-block mx-auto">
              <div
                className="m-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default BlogPost

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      date(formatString: "Do MMM YYYY")
      author {
        name
      }
      featured_media {
        source_url
      }
      content
      title
    }
  }
`
