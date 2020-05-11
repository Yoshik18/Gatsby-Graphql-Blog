import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const PrimaryLayout = props => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PrimaryLayout
