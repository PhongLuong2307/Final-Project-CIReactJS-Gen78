import React, { useState } from 'react';
import useGetBlogs from '../../hooks/useGetBlogs';
import { Container } from 'reactstrap';

const BlogsManager = () => {

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
        console.log(event.target.files[0]);
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

        const newBlog = {
            createdAt: date,
            title: title,
            imgSrc: imgSrc,
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
            postedBy: "John Doe",
            postType: "Image",
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
            .then(function () {
                alert('Upload Successfully!')
            })
    }

    const toggleForm = () => {
        const addBlogContainer = document.getElementById('addBlog-container');
        addBlogContainer.classList.toggle("toggle-display");
    }

    const blogs = useGetBlogs();

    // console.log(blogs);

    return (
        <React.Fragment>
            <div className='blogManager-container'>
                <h4 className='blogManager-title'>Blogs Manager</h4>
                <button
                    onClick={toggleForm}
                    className='toggle-btn'
                >
                    <span className='plus'>+</span> Upload New Blog
                </button>
                <div className='addBlog-container' id='addBlog-container'>
                    <h2 className='addBlog-title'>Upload Blogs</h2>
                    <div className='addBlog--form__container'>
                        <div className='addBlog-form'>
                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='title'
                                    value={title}
                                    onChange={handleSetTitle}
                                />
                                <label htmlFor='title'>Title :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading1'
                                    value={heading1}
                                    onChange={handleSetHeading1}
                                />
                                <label className="heading-label" htmlFor='heading1'>Heading 1 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph1'
                                    value={paragraph1}
                                    onChange={handleSetParagraph1}
                                />
                                <label htmlFor="paragraph1">Paragraph 1 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading2'
                                    value={heading2}
                                    onChange={handleSetHeading2}
                                />
                                <label className="heading-label" htmlFor='heading2'>Heading 2 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph2'
                                    value={paragraph2}
                                    onChange={handleSetParagraph2}
                                />
                                <label htmlFor="paragraph2">Paragraph 2 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading3'
                                    value={heading3}
                                    onChange={handleSetHeading3}
                                />
                                <label className="heading-label" htmlFor='heading3'>Heading 3 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph3'
                                    value={paragraph3}
                                    onChange={handleSetParagraph3}
                                />
                                <label htmlFor="paragraph3">Paragraph 3 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading4'
                                    value={heading4}
                                    onChange={handleSetHeading4}
                                />
                                <label className="heading-label" htmlFor='heading4'>Heading 4 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph4'
                                    value={paragraph4}
                                    onChange={handleSetParagraph4}
                                />
                                <label htmlFor="paragraph4">Paragraph 4 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading5'
                                    value={heading5}
                                    onChange={handleSetHeading5}
                                />
                                <label className="heading-label" htmlFor='heading5'>Heading 5 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph5'
                                    value={paragraph5}
                                    onChange={handleSetParagraph5}
                                />
                                <label htmlFor="paragraph5">Paragraph 5 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea'
                                    id='heading6'
                                    value={heading6}
                                    onChange={handleSetHeading6}
                                />
                                <label className="heading-label" htmlFor='heading6'>Heading 6 :</label>
                            </div>

                            <div className='input-container'>
                                <textarea
                                    className='textarea paragraph'
                                    id='paragraph6'
                                    value={paragraph6}
                                    onChange={handleSetParagraph6}
                                />
                                <label htmlFor="paragraph6">Paragraph 6 :</label>
                            </div>

                            <div className='input-container'>
                                <input
                                    style={{ marginTop: '20px' }}
                                    type='file'
                                    name='file'
                                    id='uploadFile'
                                    onChange={handleChangeFile}
                                />
                                <label htmlFor='uploadFile'>Image :</label>
                            </div>

                            <div className="form-btns-container">
                                <div className='addBtn-container'>
                                    <input onClick={handlePostBlog} className='formBtn' value='Upload' type='button' />
                                </div>
                                <div className='updateBtn-container'>
                                    <input className='updateBtn formBtn' value='Update' type='button' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogsManager;