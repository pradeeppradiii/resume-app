import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { GiClick } from 'react-icons/gi';

function Home() {
  return (
      <div>
        <div><img src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2018/03/resume-writing-service.jpeg' className='home-image'/></div>
    
        <div className=''>
            <Link to={'/personal-details'} className='button-font'>
                 <button type="button" class="btn btn-info resume-button"><span>Build Resume<GiClick/></span></button>
            </Link> 
            </div>
      </div>
  )
}

export default Home