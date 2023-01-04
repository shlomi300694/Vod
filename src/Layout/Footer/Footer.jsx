import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="bg-light text-center text-lg-start bg-black">
 
  <div className="text-center p-3 text-white" >
    © 2022 Copyright: 
    <Link className="text-white" to="/">shlomi ohayon</Link>
  </div>
</footer>
  )
}

export default Footer