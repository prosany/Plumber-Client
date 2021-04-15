import React from 'react';
import './Blog.scss';
import BlogBody from './BlogBody/BlogBody';

const blogPost = [
    {
        title: 'How Does Pipe Leak Tape Work?',
        introduction: 'You can use different kinds of tape to solve different plumbing leak problems. Use pipe thread tape, sometimes called “Teflon” or “Plumber’s” pipe...',
        picture: 'https://i.ibb.co/pdVJqkY/Cropped-Hand-Of-Plumber-Repairing-Faucet-1024x682.png'
    },
    {
        title: 'How to Clean Hair Out of a Drain',
        introduction: 'Even if you use a drain stopper, enough hair could eventually slip into your drain to slow it down. To get your drain flowing again properly...',
        picture: 'https://i.ibb.co/q7d91nn/cleaning-hair-from-drain.png'
    },
    {
        title: 'What Causes Plumbing Leaks?',
        introduction: 'We all know that household leaks happen, and surprisingly often. What we often don’t seem to know is why they happen. If you didn’t damage your...',
        picture: 'https://i.ibb.co/ZJ8B2Fm/pipe-leaks-300x200.png'
    }
]

const Blog = () => {
    return (
        <>
            <div className="Blog">
                <div className="Box">
                    <h2>Latest Blog</h2>
                    {
                        blogPost.map(post => <BlogBody key={post.title} post={post}></BlogBody>)
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;