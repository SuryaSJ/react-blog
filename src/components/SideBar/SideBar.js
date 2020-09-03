import React,{useEffect,useState} from 'react';
import './SideBar.css';
import Card from '../UI/Card/Card';
import blogPost from '../../blog.json';
import * as icons from '../../assests/icons/Solid_social_media/Behance.png';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        setPosts(blogPost.data);
        return () => {
           
        }
    },[posts]);
    return (
      <div className="SideBarContainer">
          <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
             <div className="SideBarHeader">
                 <span>About Us</span>
             </div>
             <div className="AboutUsImage">
                <img src={require('../../blogpostImages/my-profile.jpg')} alt="Surya"/>
             </div>
             <p>
                 I am Surya, a  front end  developer. Specialized in Reactjs development. Have good knowledge in creating REST api's.
            </p>             
          </Card>
          <Card  style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
             <div className="SideBarHeader">
                 <span>Social Network</span>
             </div>
             <div className="SocialMediaIcons">

             {/* <img src={require(`../../assests/icons/${}.png`)} alt="Search"  /> */}
             </div>
          </Card>
          <Card  style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
             <div className="SideBarHeader">
                 <span>Recent Post</span>
             </div>
             <div className="RecentPosts">
                 {posts.map(post=>{
                     return (
                         <NavLink to={`/post/${post.id}`} key={post.id}>
                            <div className="RecentPost" >
                                <h3>{post.blogTitle}</h3>
                                <span>{post.postedOn}</span>
                            </div>
                         </NavLink>
                       
                     )
                 })}
                 
             </div>
          </Card>
      </div>
    
    )
}

export default SideBar;
