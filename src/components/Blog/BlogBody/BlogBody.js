import React from 'react';
import { Link } from 'react-router-dom';

const BlogBody = ({ post }) => {
    return (
        <div className="Post">
            <Link to="/">
                <span>New</span>
                <img src={post.picture} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.introduction}</p>
            </Link>
        </div>
    );
};

export default BlogBody;