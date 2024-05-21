import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate= useNavigate()

    function goToAbout(){
        navigate("/about")
    }
  return (
    <div>
        <h1>Home</h1>
      {/* <Link to="/about" >About</Link> <br/>
      <Link to="/contact" >Contact</Link> */}

      <button onClick={goToAbout}>ABout</button>
    </div>
  )
}

export default Home