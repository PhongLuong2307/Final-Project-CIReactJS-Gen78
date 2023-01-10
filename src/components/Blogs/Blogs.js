import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Blogs.css";
import SideBar from '../../layout/SideBar';
// import useGetBlogs from '../../hooks/useGetBlogs';

const Blogs = () => {
    const [pagination, setPagination] = useState(1);
    const [listBlogs, setListBlogs] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);
    const [listBlogsLength, setListBlogsLength] = useState(3);

    useEffect(() => {
        const handleFetchAllBlogs = () => {
            fetch(
                `https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setAllBlogs(data);
                    setListBlogsLength(data.length);
                });
        };

        handleFetchAllBlogs();
    }, []);

    useEffect(() => {
        const handleFetchListBlogs = () => {
            fetch(
                `https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs?page=${pagination}&limit=3`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setListBlogs(data);
                });
        };

        handleFetchListBlogs();
    }, [pagination]);

    const handleSelectPagination = (page) => {
        if (page === 'prev') {
            if (pagination > 1) {
                setPagination(pagination - 1);
            }
        } else if (page === 'next') {
            if (pagination < Math.ceil(listBlogsLength / 3)) {
                setPagination(pagination + 1);
            }
        } else {
            setPagination(page);
        }
    };

    const handleSearchBlog = (event) => {
        const value = event.target.value;
        let dataSearch = [];
        if (value !== '') {
            dataSearch = allBlogs.filter((blog, index) => {
                return blog.title.includes(value) || blog.paragraph1.includes(value) || blog.paragraph2.includes(value) || blog.paragraph3.includes(value) || blog.paragraph4.includes(value) || blog.paragraph5.includes(value) || blog.paragraph6.includes(value);
            });
        } else {
            for (let i = 0; i <= 2; i++) {
                dataSearch.push(allBlogs[i]);
            }
        }

        setListBlogs(dataSearch);
    }

    return (
        <React.Fragment>
            <div className='blogs-title-container'>
                <h2 className='blogs-title'>Blogs</h2>
                <input
                    onChange={handleSearchBlog}
                    placeholder='Blogs searching ...'
                    className='searchBlogs'
                />
            </div>
            <div className='blogs-body'>
                <div className='blogs-container'>

                    {
                        listBlogs.length > 0 ? (
                            listBlogs.map((blog) => {
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
                                                    {blog.paragraph1.slice(0, 350)} ...
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
                            <h3>Loading..</h3>
                        )
                    }

                    <div class="pagination p1">
                        <ul>
                            <div
                                className={`${pagination === 1 ? 'disabled' : ''}`}
                                // href="#id"
                                onClick={() => {
                                    handleSelectPagination('prev');
                                }}
                            >
                                <li>{'<'}</li>
                            </div>
                            {Array(Math.ceil(listBlogsLength / 3))
                                .fill()
                                .map((element, index) => (
                                    <div
                                        className={`${pagination === index + 1 ? 'is-active' : ''
                                            }`}
                                        onClick={() => {
                                            handleSelectPagination(index + 1);
                                        }}
                                    >
                                        <li>{index + 1}</li>
                                    </div>
                                ))}
                            <div
                                onClick={() => {
                                    handleSelectPagination('next');
                                }}
                                className={`${pagination === Math.ceil(listBlogsLength / 3) ? 'disabled' : ''
                                    }`}
                            >
                                <li>{'>'}</li>
                            </div>
                        </ul>
                    </div>
                </div>

                <SideBar />
            </div>
        </React.Fragment>
    )
}

export default Blogs;