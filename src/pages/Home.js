import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css';
import avatar from '../images/avatar.svg';

function Home() {
  return (
    <div className="container-home">
      <Header />
      <div className="container-divs">
      <div className="first-div">
      <h1 className="title">Hello. I'm Alissandra</h1>
      <Footer className="footer"/>
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