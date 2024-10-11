import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'
import Categories from '../Access/Categories'

const Header = () => {

  return (
    <><div className='header'>
          <div className="header-contents">
              <h2>Discover the art of gold with us.</h2>
              <p>Each piece is meticulously crafted to highlight your unique beauty and style, making every moment a celebration of you.</p>
              <button className='more'>View</button>
          </div>

      </div>
      <div className='explore-design' id='explore-design'>
              <h1>Explore Products</h1>
              <p className='explore-design-text'>Discover the Perfect Piece for Every Occasion.</p>
              <img src={assets.design1} alt="" />
          </div>

         <Categories/>

      <div className="about" id="about">
        <div className="head">
          <h3>About Us</h3>
        </div>
        <div className="info">
          <div className="content-info">
            <h4>Sri Dashami Durga Silver Merchant</h4>
            <p>
              Welcome to Sri Dashami Durga Silver Merchant - Your Premier Destination for Exquisite Jewellery.<br />
              At Sri Dashami Durga Silver Merchant, we believe that jewellery is not just an accessory; it's a reflection of your unique style, a symbol of cherished moments, and a testament to your love and individuality. Since our establishment, we have been committed to helping you find the perfect piece of jewelry that tells your story, celebrates your milestones, and adds a touch of elegance to your everyday life.
            </p>
            <button className="learn">Learn More</button>  
          </div>
          <div className="info-img">
            <img src={assets.logo2} alt="logo2" />
          </div>
        </div>
      </div>
          </>
  )
}

export default Header