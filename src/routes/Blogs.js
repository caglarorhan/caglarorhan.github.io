// src/routes/Blogs.js
import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
    // This is just a placeholder. You would typically fetch this data from an API.
    const blogs = [
        { id: 1, title: 'Blog 1' },
        { id: 2, title: 'Blog 2' },
        // Add more blogs as needed
    ];

    return (
        <div>
            <h1>Blogs</h1>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default Blogs;
