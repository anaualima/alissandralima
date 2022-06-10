import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css';
import avatar from '../images/avatar.png';

function Home() {
  return (
    <div className="container-home">
      <Header />
      <div className="container-divs">
      <div className="first-div">
      <h1 className="title"><span>H</span>ello<span>,</span> <br></br> I'm<br></br> Alissandra<span>.</span></h1>
      <Footer className="footer-class"/>
      </div>
      <div className="img-div">
      <img src={ avatar } alt="avatar-alissandra" className="avatar"/>
      </div>
      <div className='second-div'>
      </div>
      </div>
    </div>
  )
}

export default Home;