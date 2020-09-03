import React, { useState, useEffect } from 'react';
import { withRouter} from 'react-router-dom';
import './BlogPost.css';
import Card from '../UI/Card/Card';
import blogPost from '../../blog.json';

const BlogPost = (props) => {

    const [post,setPost]=useState({});
    const [postId,setPostId]=useState('');
    useEffect(() => {
        
        const postId=props.match.params.postId;
        const postEle=blogPost.data.find(post=>post.id===+postId);
        setPost(postEle);
        return () => {
           
        }
    },[post,props.match.params.postId]);
    if(!post.blogImage) return null;
    return (     
            <div className="BlogPostContainer">
                <Card>
                    <div className="BlogHeader">
                        <span className="BlogCategory">{post.blogCategory}</span>
                            <h1 className="PostTitle">{post.blogTitle}</h1>
                        <span className="PostedBy">posted on {post.postedOn} by {post.author}</span>
                    </div> 
                    <div className="BlogImageContainer">
                        <img src={require(`../../blogpostImages/${post.blogImage}`)} alt="Post Image"/>
                    </div> 
                    <div className="BlogImageContent">
                        <p>{post.blogText}</p>
                    </div>                 
                </Card>
            </div>
    )
}

export default withRouter(BlogPost);
