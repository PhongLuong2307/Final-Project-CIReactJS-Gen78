import React from 'react';
import FeatureItem from './FeatureItem';
import HomeNews from './HomeNews';
import SideBar from '../../layout/SideBar';

const HomeBody = () => {
  const featureImgSrc = [
    { src: 'assets/img/feature_info.png' },
    { src: 'assets/img/feature_phone.png' },
    { src: 'assets/img/feature_thumb.png' },
    { src: 'assets/img/feature_pencil.png' },
    { src: 'assets/img/feature_wheelchair.png' },
    { src: 'assets/img/feature_questionmark.png' },
  ]
  return (
    <React.Fragment>
      <div className='homeBody-container'>
        <div className='homeBody-content'>

          {/* Feature Items */}
          <div className='featureItems-container'>
            {
              featureImgSrc.map((item) => {
                return (
                  <FeatureItem featureImgSrc={item.src} />
                )
              })
            }
          </div>

          {/* Announcement */}
          <div className='announcement-container'>
            <div className='announcement-text'>
              <h3>We offer a no obligation a free initial consultation</h3>
              <p>Fees are an estimate only and may be more depending on your situation</p>
            </div>
            <div>
              <button className='announcement-btn'>Make An Appointment</button>
            </div>
          </div>

          {/* Home Main Layout */}
          <div className='homeMainContent-container'>
            <HomeNews />
            <SideBar />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeBody;