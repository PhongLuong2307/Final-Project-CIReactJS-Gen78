import React from 'react';
import FeatureItem from './FeatureItem';
import HomeNews from './HomeNews';
import SideBar from '../../layout/SideBar';
import useGetBlogs from '../../hooks/useGetBlogs';
import { Link } from 'react-router-dom';

const HomeBody = () => {
  const featureImgSrc = [
    { src: 'assets/img/feature_info.png' },
    { src: 'assets/img/feature_phone.png' },
    { src: 'assets/img/feature_thumb.png' },
    { src: 'assets/img/feature_pencil.png' },
    { src: 'assets/img/feature_wheelchair.png' },
    { src: 'assets/img/feature_questionmark.png' },
  ]

  const blogList = useGetBlogs();

  const homeNewsBlogs = blogList.splice(0, 2);

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
              <Link to='/appointment'>
                <button className='announcement-btn'>Make An Appointment</button>
              </Link>
            </div>
          </div>

          {/* Home Main Layout */}
          <div className='homeMainContent-container'>
            <HomeNews
              homeNewsBlogs={homeNewsBlogs}
            />
            <SideBar />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeBody;