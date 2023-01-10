import { useEffect, useState } from 'react';

const useGetBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const handleFetchBlogs = () => {
            fetch(
                "https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-blogs"
            )
                .then((response) => {
                    return response.json()
                })
                .then((blogs) => {
                    setBlogs(blogs);
                })
        }

        handleFetchBlogs();
    })

    return blogs;

}

export default useGetBlogs;