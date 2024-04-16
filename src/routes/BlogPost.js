// src/routes/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { postId } = useParams();

    // This is just a placeholder. You would typically fetch this data from an API.
    const blogPost = { id: postId, title: `Blog ${postId}`, content: `This is the content for blog ${postId}.` };

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
        </div>
    );
}

export default BlogPost;
