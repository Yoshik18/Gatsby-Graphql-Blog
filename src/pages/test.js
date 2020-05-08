import React from 'react';
import Header from '../components/Header'
import { Link } from 'gatsby';


//Curly braces require 'return', round brackets do not 
// const test = () => {
//     return(<h1>Hello, This is a test page!</h1>);
// }


const test = () => (
    <div>
        <Header title="Test Page"></Header>
        <Link to="./">Index Page</Link>
        <h1>This is a test page!</h1>
        <img width="500px" src="https://assets.entrepreneur.com/content/3x2/2000/what-you-can-learn-from-the-great-gatsby-and-9-other-fictional-entrepreneurs.jpg" alt="Gatsby" />
    </div>
)

export default test;
