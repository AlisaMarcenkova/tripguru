// Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="main-content">
        <h1 className='blog-title'>Welcome to Our Blog</h1>
        <div className="article">
          <h2>10 Best Places to Visit in Arizona</h2>
          <p>Article content goes here...</p>
        </div>
      </div>
      <div className="sidebar">
        <h2>Recent Posts</h2>
        <ul className='blog-list'>
          <li className='lists'>Recent Post 1</li>
          <li className='lists'>Recent Post 2</li>
          <li className='lists'>Recent Post 3</li>
          <li className='lists'>Recent Post 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
