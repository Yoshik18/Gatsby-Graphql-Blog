import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.class}>{props.children}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
PrimaryLayout.defaultProps = {
  class: "col-xs-6",
}

export default PrimaryLayout
