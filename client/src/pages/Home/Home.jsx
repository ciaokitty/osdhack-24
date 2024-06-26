import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  function onMouseDown(e) {
    navigate('/team');
    console.log(e.name)
  }
  return (
    <div className='homepage'>
      {/* <div className="event">OSDHack'24</div>
      <div className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia voluptates aliquam est nobis, sequi perferendis illum odio dolorum sunt?</div>
      <div className="button">
        <button className="register">
          <Link to='/register'>Register Now</Link>
        </button>
        <button className='cod'>
          <Link to='/cod'>Learn More</Link>
        </button>
      </div> */}

      <Spline scene="https://prod.spline.design/B4gEdCxzZMigeDFK/scene.splinecode" onMouseDown={onMouseDown} />

    </div>
  )
}

export default Home
