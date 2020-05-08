import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogPost = props => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <h1>This is from Blog Post</h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
