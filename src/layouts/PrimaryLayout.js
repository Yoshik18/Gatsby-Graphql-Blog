import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PrimaryLayout
