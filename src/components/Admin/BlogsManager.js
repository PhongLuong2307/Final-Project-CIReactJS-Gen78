import React, { useState, useEffect } from 'react';
// import useGetBlogs from '../../hooks/useGetBlogs';

const BlogsManager = () => {

    const [allBlogs, setAllBlogs] = useState([]);

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
                });
        };

        handleFetchAllBlogs();
    }, [allBlogs]);

    const [title, setTitle] = useState('');
    const [heading1, setHeading1] = useState('');
    const [paragraph1, setParagraph1] = useState('');
    const [heading2, setHeading2] = useState('');
    const [paragraph2, setParagraph2] = useState('');
    const [heading3, setHeading3] = useState('');
    const [paragraph3, setParagraph3] = useState('');
    const [heading4, setHeading4] = useState('');
    const [paragraph4, setParagraph4] = useState('');
    const [heading5, setHeading5] = useState('');
    const [paragraph5, setParagraph5] = useState('');
    const [heading6, setHeading6] = useState('');
    const [paragraph6, setParagraph6] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const [id, setID] = useState(0);

    const handleSetTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleSetHeading1 = (event) => {
        setHeading1(event.target.value);
    }

    const handleSetParagraph1 = (event) => {
        setParagraph1(event.target.value);
    }

    const handleSetHeading2 = (event) => {
        setHeading2(event.target.value);
    }

    const handleSetParagraph2 = (event) => {
        setParagraph2(event.target.value);
    }

    const handleSetHeading3 = (event) => {
        setHeading3(event.target.value);
    }

    const handleSetParagraph3 = (event) => {
        setParagraph3(event.target.value);
    }

    const handleSetHeading4 = (event) => {
        setHeading4(event.target.value);

    }

    const handleSetParagraph4 = (event) => {
        setParagraph4(event.target.value);
    }

    const handleSetHeading5 = (event) => {
        setHeading5(event.target.value);
    }

    const handleSetParagraph5 = (event) => {
        setParagraph5(event.target.value);
    }

    const handleSetHeading6 = (event) => {
        setHeading6(event.target.value);
    }

    const handleSetParagraph6 = (event) => {
        setParagraph6(event.target.value);
    }

    const handleChangeFile = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handlePostBlog = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let imgSrc;

        if (selectedFile) {
            imgSrc = URL.createObjectURL(selectedFile);
        } else {
            imgSrc = '';
        }

        const postedUser = localStorage.getItem('username');

        const newBlog = {
            createdAt: date,
            title: title,
            imgSrc: '',
            heading1: heading1,
            paragraph1: paragraph1,
            heading2: heading2,
            paragraph2: paragraph2,
            heading3: heading3,
            paragraph3: paragraph3,
            heading4: heading4,
            paragraph4: paragraph4,
            heading5: heading5,
            paragraph5: paragraph5,
            heading6: heading6,
            paragraph6: paragraph6,
            comments: [],
            postedBy: postedUser,
            postType: "Post",
        }

        console.log(newBlog);

        fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs', {
            method: 'POST',
            body: JSON.stringify(newBlog),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setAllBlogs(data);
                alert('Upload Successfully!');
            })
    }

    const handleDeleteBlog = (id) => {
        fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs/' + id, {
            method: 'DELETE',
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setAllBlogs(data);
                alert("Delete successfully!");
            });
    }

    const onUpdateBlog = (id) => {  
        fetch(
            'https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs/' + id,
        )
            .then((response) => {
                return response.json();
            })
            .then((blog) => {
                setTitle(blog.title);
                setHeading1(blog.heading1);
                setParagraph1(blog.paragraph1);
                setHeading2(blog.heading2);
                setParagraph2(blog.paragraph2);
                setHeading3(blog.heading3);
                setParagraph3(blog.paragraph3);
                setHeading4(blog.heading4);
                setParagraph4(blog.paragraph4);
                setHeading5(blog.heading5);
                setParagraph5(blog.paragraph5);
                setHeading6(blog.heading6);
                setParagraph6(blog.paragraph6);
                setID(blog.id);
            });

        const addBlogContainer = document.getElementById('addBlog-form');
        addBlogContainer.classList.add("toggle-display");

        console.log(id);
    }

    const handleUpdateBlog = (id) => {
        const updatedBlog = {
            title: title,
            heading1: heading1,
            paragraph1: paragraph1,
            heading2: heading2,
            paragraph2: paragraph2,
            heading3: heading3,
            paragraph3: paragraph3,
            heading4: heading4,
            paragraph4: paragraph4,
            heading5: heading5,
            paragraph5: paragraph5,
            heading6: heading6,
            paragraph6: paragraph6,
        }

        fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs/' + id, {
            method: 'PUT',
            body: JSON.stringify(updatedBlog),
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((result) => {
                alert('Update successfully!');
            })
    }

    const toggleForm = () => {
        const addBlogContainer = document.getElementById('addBlog-form');
        addBlogContainer.classList.toggle("toggle-display");
    }

    return (
        <React.Fragment>
            <div className='manager-container'>
                <h4 className='manager-title'>Blogs Manager</h4>
                <button
                    onClick={toggleForm}
                    className='toggle-btn'
                >
                    <span className='plus'>+</span> Upload New Blog
                </button>
                <div className='addForm-container' id='addBlog-form'>
                    <h2 className='addBlog-title'>Upload Blog</h2>
                    <div className='addBlog--form__container'>
                        <div>
                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='title'
                                    value={title}
                                    onChange={handleSetTitle}
                                />
                                <label htmlFor='title'>Title </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading1'
                                    value={heading1}
                                    onChange={handleSetHeading1}
                                />
                                <label className="heading-label" htmlFor='heading1'>Heading 1 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph1'
                                    value={paragraph1}
                                    onChange={handleSetParagraph1}
                                />
                                <label htmlFor="paragraph1">Paragraph 1 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading2'
                                    value={heading2}
                                    onChange={handleSetHeading2}
                                />
                                <label className="heading-label" htmlFor='heading2'>Heading 2 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph2'
                                    value={paragraph2}
                                    onChange={handleSetParagraph2}
                                />
                                <label htmlFor="paragraph2">Paragraph 2 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading3'
                                    value={heading3}
                                    onChange={handleSetHeading3}
                                />
                                <label className="heading-label" htmlFor='heading3'>Heading 3 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph3'
                                    value={paragraph3}
                                    onChange={handleSetParagraph3}
                                />
                                <label htmlFor="paragraph3">Paragraph 3 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading4'
                                    value={heading4}
                                    onChange={handleSetHeading4}
                                />
                                <label className="heading-label" htmlFor='heading4'>Heading 4 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph4'
                                    value={paragraph4}
                                    onChange={handleSetParagraph4}
                                />
                                <label htmlFor="paragraph4">Paragraph 4 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading5'
                                    value={heading5}
                                    onChange={handleSetHeading5}
                                />
                                <label className="heading-label" htmlFor='heading5'>Heading 5 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph5'
                                    value={paragraph5}
                                    onChange={handleSetParagraph5}
                                />
                                <label htmlFor="paragraph5">Paragraph 5 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading6'
                                    value={heading6}
                                    onChange={handleSetHeading6}
                                />
                                <label className="heading-label" htmlFor='heading6'>Heading 6 </label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph6'
                                    value={paragraph6}
                                    onChange={handleSetParagraph6}
                                />
                                <label htmlFor="paragraph6">Paragraph 6 </label>
                            </div>

                            <div className='input-container'>
                                <input
                                    style={{ marginTop: '20px' }}
                                    type='file'
                                    name='file'
                                    id='uploadFile'
                                    onChange={handleChangeFile}
                                />
                                <label htmlFor='uploadFile'>Image </label>
                            </div>

                            <div className="form-btns-container">
                                <div className='addBtn-container'>
                                    <input onClick={handlePostBlog} className='formBtn' value='Upload' type='button' />
                                </div>
                                <div className='updateBtn-container'>
                                    <input onClick={() => {handleUpdateBlog(id)}} className='updateBtn formBtn' value='Update' type='button' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blogs List */}

                <div className='manage-blogsList'>
                    <div class="table-responsive">
                        <table class="table" id="dataTable" width="100%" cellspacing="0">
                            <thead className='admin-thead'>
                                <tr>
                                    <th className='blogID-th'>Blog ID</th>
                                    <th className='blogTitle-th'>Title</th>
                                    <th className='blogCreated-th'>Created Date</th>
                                    <th className='blogAuthor-th'>Author</th>
                                    <th className='actions'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allBlogs.length > 0 ? (
                                        allBlogs.map((blog) => {
                                            return (
                                                <tr className='table-row'>
                                                    <td className='blogID-td'>{blog.id}</td>
                                                    <td className='blogTitle-td'>{blog.title}</td>
                                                    <td className='blogCreated-td'>{blog.createdAt}</td>
                                                    <td className='blogAuthor-td'>{blog.postedBy}</td>
                                                    <td className='actions-td'>
                                                        <div className='actions-btns-container'>
                                                            <button onClick={() => { onUpdateBlog(blog.id) }} className='actionBtn updateBtn'>Update</button>
                                                            <button onClick={() => { handleDeleteBlog(blog.id) }} className='actionBtn deleteBtn'>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <h3>Loading...</h3>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogsManager;