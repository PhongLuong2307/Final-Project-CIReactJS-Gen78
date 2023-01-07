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
            homeNewsBlogs.map((blog) => {
              return (
                <div className='postItem-container'>
                  <div className='postInfor-container'>
                    <div className='upload-date'>{blog.createdAt}</div>
                    <div className='comments-number'>{blog.comments.length} comments</div>
                  </div>

                  <div className='postContent-container'>
                    <Link>
                      <img className='postItem-img' src={blog.imgSrc} alt='' />
                    </Link>
                    <Link className='feature-link'>
                      <h4 className='postItem-title'>{blog.title}</h4>
                    </Link>

                    <div className='postItem-content'>
                      <p>
                        {blog.paragraph1}
                      </p>

                      <p>
                        {blog.paragraph2}
                      </p>
                      <Link>
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
          }

          {/* <div className='postItem-container'>
            <div className='postInfor-container'>
              <div className='upload-date'>10 DEC 22</div>
              <div className='comments-number'>5 comments</div>
            </div>

            <div className='postContent-container'>
              <Link className='feature-link'>
                <h4 className='postItem-title'>Lorem ipsum dolor sit amat velum</h4>
              </Link>

              <div className='postItem-content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut volutpat rutrum eros amet sollicitudin interdum.
                  Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et mollis tellus neque vitae elit.
                  Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi malesuada.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link>
                  <span className='postItem-btn'>Read more →</span>
                </Link>
                <div className='postItem-info'>
                  <p>Posted by <span className='textDecor'>John Doe</span></p>
                  <p>Post type <span className='textDecor'>Link</span></p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <Link>
          <div className='showAll-btn'>Show all →</div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default HomeNews;