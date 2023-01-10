import React from 'react';
import { Link } from 'react-router-dom';

const HomeNews = (props) => {

  const { homeNewsBlogs } = props;

  return (
    <React.Fragment>
      <div className='homeNews-container'>
        {/* Title */}
        <div className='newsTitle-container'>
          <h5>Latest News</h5>
          <div className='line'></div>
        </div>

        {/* Posts */}

        <div className='posts'>
          {
            homeNewsBlogs.length > 0 ? (
              homeNewsBlogs.map((blog) => {
                return (
                  <div className='postItem-container'>
                    <div className='postInfor-container'>
                      <div className='upload-date'>{blog.createdAt}</div>
                      <div className='comments-number'>{blog.comments.length} comments</div>
                    </div>

                    <div className='postContent-container'>
                      <Link to={`/blog/${blog.id}`}>
                        <img className='postItem-img' src={blog.imgSrc} alt='' />
                      </Link>
                      <Link to={`/blog/${blog.id}`} className='feature-link'>
                        <h4 className='postItem-title'>{blog.title}</h4>
                      </Link>

                      <div className='postItem-content'>
                        <p>
                          {blog.paragraph1.slice(0, 400)}...
                        </p>

                        <Link to={`/blog/${blog.id}`}>
                          <span className='postItem-btn'>Read more →</span>
                        </Link>
                        <div className='postItem-info'>
                          <p>Posted by <span className='textDecor'>{blog.postedBy}</span></p>
                          <p>Post type <span className='textDecor'>{blog.postType}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <h3>Loading...</h3>
            )
          }
        </div>

        <Link to='/about#blogs'>
          <div className='showAll-btn'>Show all →</div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default HomeNews;