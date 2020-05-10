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
          <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
      content
      title
    }
  }
`
