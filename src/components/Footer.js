import React from "react"
import footerStyle from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="container">
        <span className="text-muted">Copyright Gatsby Project 2020</span>
      </div>
    </footer>
  )
}

export default Footer
