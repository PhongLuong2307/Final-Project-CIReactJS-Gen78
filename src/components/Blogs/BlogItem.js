import React, { useState, useEffect } from 'react';
import './BlogItem.css';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../../layout/SideBar';

const BlogItem = () => {
  const params = useParams();

  const [blog, setBlog] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [cmtsNumber, setCmtsNumber] = useState(0);
  const [username, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const handleFetchBlog = () => {
      fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs/' + params.idBlog)
        .then((response) => {
          return response.json()
        }).then((data) => {
          setBlog(data);
          setCommentsList(data.comments);
          setCmtsNumber(data.comments.length);
        })
    }

    handleFetchBlog();
  }, [params.idBlog])

  useEffect(() => {
    let currentUser = localStorage.getItem('username');
    let currentAvatar = localStorage.getItem('avatar');
    let currentStatus = JSON.parse(localStorage.getItem('isLogin'));

    setUserName(currentUser);
    setAvatar(currentAvatar);
    setIsLogin(currentStatus);
  }, []);

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSendMessage = () => {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + '-' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    const newComment = {
      avatar: avatar,
      username: username,
      time: time,
      message: message,
    }

    let blogComments = blog.comments;
    
    const addCommentBlog = {
      createdAt: blog.date,
      title: blog.title,
      imgSrc: blog.imgSrc,
      heading1: blog.heading1,
      paragraph1: blog.paragraph1,
      heading2: blog.heading2,
      paragraph2: blog.paragraph2,
      heading3: blog.heading3,
      paragraph3: blog.paragraph3,
      heading4: blog.heading4,
      paragraph4: blog.paragraph4,
      heading5: blog.heading5,
      paragraph5: blog.paragraph5,
      heading6: blog.heading6,
      paragraph6: blog.paragraph6,
      comments: [...blogComments, newComment],
      postedBy: blog.postedUser,
      postType: blog.postType,
    }

    if (message !== '') {
      fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs/' + params.idBlog, {
        method: 'PUT',
        body: JSON.stringify(addCommentBlog),
        headers: {
          'Content-Type': 'application/json'
        },

      })
        .then((response) => response.json())
        .then((result) => {
          setCommentsList([...blogComments, newComment]);
          setCmtsNumber([...blogComments, newComment].length);
        })
    }
  }

  return (
    <React.Fragment>
      <div className='blogSite-container'>
        <div className='blog-container'>
          <div className='blog-content'>
            <div className='blog-item'>
              <div className='blog-title-container'>
                <h2 className='blog-title'>Blog</h2>
                <ul className='bread-crumb'>
                  <li>
                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                  </li>
                  <span>→</span>
                  <li>
                    <Link to='/about' style={{ color: 'rgb(162, 162, 162)' }}>About</Link>
                  </li>
                  <span>→</span>
                  <li>Blog</li>
                </ul>
              </div>

              <div className='blogItem-mainContent'>
                <div className='postItem-container'>
                  <div className='postContent-container blogItem-container'>
                    <img className='postItem-img'
                      src={`../${blog.imgSrc}`}
                      alt=''
                    />
                    <h1 className='postItem-title blogItem-title'>{blog.title}</h1>

                    <div className='postItem-info'>
                      <p>Posted by <span className='textDecor'>{blog.postedBy}</span></p>
                      <p>Post type <span className='textDecor'>{blog.postType}</span></p>
                      <p>Posted at <span className='textDecor'>{blog.createdAt}</span></p>
                    </div>


                    <div className='postItem-content blogItem-content'>

                      <h3 className='blogItem-heading'>
                        {blog.heading1}
                      </h3>

                      <p>
                        {blog.paragraph1}
                      </p>

                      <h3 className='blogItem-heading'>
                        {blog.heading2}
                      </h3>

                      <p>
                        {blog.paragraph2}
                      </p>

                      <h3 className='blogItem-heading'>
                        {blog.heading3}
                      </h3>

                      <p>
                        {blog.paragraph3}
                      </p>

                      <h3 className='blogItem-heading'>
                        {blog.heading4}
                      </h3>

                      <p>
                        {blog.paragraph4}
                      </p>

                      <h3 className='blogItem-heading'>
                        {blog.heading5}
                      </h3>

                      <p>
                        {blog.paragraph5}
                      </p>

                      <h3 className='blogItem-heading'>
                        {blog.heading6}
                      </h3>

                      <p>
                        {blog.paragraph6}
                      </p>

                    </div>

                    <div className='comments-container'>
                      <div className='cmts-number'>{cmtsNumber} comments</div>

                      {
                        commentsList.length > 0 ? (
                          commentsList.map((comment) => {
                            return (
                              <div className='commentItem-container'>
                                <div className='comment-img-container'>
                                  <img className='comment-img' src={`${comment.avatar}`} alt='' />
                                </div>
                                <div className='comment-content'>
                                  <div className='comment-info'>
                                    Posted by {comment.username} on {comment.time}
                                  </div>
                                  <div className='comment-message'>
                                    {comment.message}
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        ) : (
                          <div style={{ marginBottom: '20px' }}></div>
                        )
                      }

                      <div className='cmt-form-container'>
                        <h5>Leave a reply</h5>
                        <div className='line'></div>
                        {
                          (
                            isLogin ? (
                              <div className='message-container'>
                                <label className='message-label'>Message</label>
                                <textarea
                                  onChange={handleChangeMessage}
                                  className='message-input'
                                />
                                <div className='message-btn-container'>
                                  <button
                                    onClick={handleSendMessage}
                                    className='message-btn'
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <Link className='message-login' to='/login'>Log In</Link> To Comment
                              </div>
                            )
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SideBar />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BlogItem;