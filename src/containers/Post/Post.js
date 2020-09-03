import React from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';
import SideBar from '../../components/SideBar/SideBar';
import './Post.css';

const Post = (props) => {
    console.log("Props",props);
    return (
        <div className="Post">
         <BlogPost/>
         <SideBar/>
        </div>
    )
}

export default Post;
